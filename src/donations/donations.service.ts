import { Injectable } from '@nestjs/common';
import { ProjectData } from './types/project-data';
import { RewardData } from './types/reward-data';
import { UserData } from './types/user-data';
import { PaymentData } from './types/payment-data';
import { Donation, PrismaClient, User } from '@prisma/client';
import PaymentService from 'src/payment/payment.service';
// import PaymentService from 'src/payment/payment.service';

@Injectable()
export class DonationsService {
  constructor(private readonly prisma: PrismaClient) {}

  async process(
    project: ProjectData,
    reward: RewardData,
    user: UserData,
    payment: PaymentData,
  ): Promise<{ id: number; transactionId: string; status: string }> {
    const foundProject = await this.prisma.project.findUnique({
      where: { id: project.id },
    });
    // console.log('Projects: ', foundProject);

    const foundReward = await this.prisma.reward.findUnique({
      where: { id: reward.id },
    });
    // console.log('Rewards: ', foundReward);

    const userCreated = await this.createUser(user);
    if (userCreated === null) {
      // Se o resultado for null, significa que o usuário não existe
      return {
        id: 0,
        transactionId: '',
        status: 'Usuário não existe',
      };
    }
    // console.log('userCreated', userCreated);

    let donationCreated = await this.createDonation(
      foundProject,
      foundReward,
      userCreated,
    );
    // console.log('donationCreated', donationCreated);

    const { transactionId, status } = await new PaymentService().process(
      userCreated,
      donationCreated,
      payment,
    );

    donationCreated = await this.prisma.donation.update({
      where: { id: donationCreated.id },
      data: {
        transactionId,
        status,
      },
    });

    return {
      id: donationCreated.id,
      transactionId: donationCreated.transactionId,
      status: donationCreated.status,
    };
  }

  // private async createUser(user: UserData): Promise<User> {
  //   const userCreated = await this.prisma.user.upsert({
  //     where: { email: user.email },
  //     update: user,
  //     create: {
  //       user: user.user,
  //       birthdate: user.birthdate,
  //       email: user.email,
  //       password: user.password,
  //     },
  //   });

  //   return userCreated;
  // }

  private async createUser(user: UserData): Promise<User | null> {
    const userCreated = await this.prisma.user.findUnique({
      where: { email: user.email },
    });

    if (userCreated) {
      // O usuário já existe, você pode realizar a operação de update
      const updatedUser = await this.prisma.user.update({
        where: { email: userCreated.email },
        data: user, // Use os dados do usuário fornecidos para atualizar
      });

      return updatedUser;
    } else {
      // O usuário não existe, retorne um erro ou faça algo apropriado
      return null;
    }
  }

  private async createDonation(
    project: ProjectData,
    reward: RewardData,
    user: UserData,
  ): Promise<Donation> {
    const total = reward.value;
    const donationCreated = await this.prisma.donation.create({
      data: {
        total,
        project: {
          connect: { id: project.id },
        },
        reward: {
          connect: { id: reward.id },
        },
        user: {
          connect: { id: user.id },
        },
      },
      include: {
        user: true,
        project: true,
        reward: true,
      },
    });

    return donationCreated;
  }

  async findOne(id: number): Promise<Donation> {
    const foundDonation = await this.prisma.donation.findUnique({
      where: { id },
      include: {
        user: true,
        project: true,
        reward: true,
      },
    });
    return foundDonation;
  }
}
