import { Injectable } from '@nestjs/common';
import { Donation, PrismaClient } from '@prisma/client';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaClient) {}

  async create(data: any): Promise<Donation> {
    const donations = await this.prisma.donation.create({
      data: {
        ...data,
      },
    });
    return donations;
  }

  async findAll(): Promise<Donation[]> {
    const foundAllDonations = await this.prisma.donation.findMany();
    return foundAllDonations;
  }
}
