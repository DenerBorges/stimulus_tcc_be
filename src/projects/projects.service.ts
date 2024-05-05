import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient, Project } from '@prisma/client';
import { CreateProjectDto } from './dto/create-project.dto';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaClient) {}

  async create(createProjectDto: CreateProjectDto) {
    const { userId, ...projectData } = createProjectDto;

    const userExists = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userExists) {
      throw new Error(`Usuário com ID ${userId} não encontrado.`);
    }

    return this.prisma.project.create({
      data: {
        userId: userId,
        ...projectData,
      },
    });
  }

  async findAll(): Promise<Project[]> {
    const foundAllProject = await this.prisma.project.findMany({
      where: { visible: true },
    });
    return foundAllProject;
  }

  async findOne(id: number): Promise<Project> {
    const foundProject = await this.prisma.project.findUnique({
      where: { id },
    });
    return foundProject;
  }

  async searchProjects(name: string): Promise<Project[]> {
    const searchProjects = await this.prisma.project.findMany({
      where: {
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });
    return searchProjects;
  }

  async update(
    id: number,
    data: Partial<Project>,
    images?: Express.Multer.File[],
  ): Promise<Project> {
    // Verifica se o projeto existe
    const existingProject = await this.prisma.project.findUnique({
      where: { id },
    });

    if (!existingProject) {
      throw new NotFoundException(`Projeto com ID ${id} não encontrado.`);
    }

    // Se imagens forem fornecidas, adicione-as ao projeto existente
    if (images && images.length > 0) {
      const imageStrings = images.map((image) =>
        image.buffer.toString('base64'),
      );

      // Atualiza o projeto existente para adicionar as novas imagens
      data.image = [...existingProject.image, ...imageStrings];
    }

    // Atualiza o projeto com os dados fornecidos
    const updatedProject = await this.prisma.project.update({
      where: { id },
      data,
    });

    return updatedProject;
  }

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async updateProjectDeadlines() {
    const allProjects = await this.prisma.project.findMany();

    for (const project of allProjects) {
      if (project.deadline > 0 && project.visible) {
        await this.prisma.project.update({
          where: { id: project.id },
          data: { deadline: project.deadline - 1 },
        });

        if (project.deadline - 1 === 0) {
          await this.prisma.project.update({
            where: { id: project.id },
            data: { visible: false },
          });
        }
      }
    }
  }

  async remove(id: number): Promise<Project> {
    const removeProject = await this.prisma.project.delete({
      where: { id },
    });
    return removeProject;
  }
}
