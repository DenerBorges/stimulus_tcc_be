import { Injectable } from '@nestjs/common';
import { PrismaClient, Comment } from '@prisma/client';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaClient) {}

  async create(createProjectDto: CreateCommentDto): Promise<Comment> {
    const { userId, projectId, ...commentData } = createProjectDto;
    const comments = await this.prisma.comment.create({
      data: {
        userId,
        projectId,
        ...commentData,
      },
    });
    return comments;
  }

  async findAll(projectId: number): Promise<Comment[]> {
    const foundAllComments = await this.prisma.comment.findMany({
      where: {
        projectId: projectId,
      },
    });
    return foundAllComments;
  }

  async findOne(id: number): Promise<Comment> {
    const foundOneComment = await this.prisma.comment.findUnique({
      where: { id },
    });
    return foundOneComment;
  }

  async update(id: number, data: Partial<Comment>): Promise<Comment> {
    const updatedComment = await this.prisma.comment.update({
      where: { id },
      data,
    });
    return updatedComment;
  }

  async remove(id: number) {
    const deletedComment = await this.prisma.comment.delete({
      where: { id },
    });
    return deletedComment;
  }
}
