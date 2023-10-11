import { Injectable } from '@nestjs/common';
import { PrismaClient, Comment } from '@prisma/client';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaClient) {}

  async create(data: any): Promise<Comment> {
    const comments = await this.prisma.comment.create({
      data: {
        ...data,
      },
    });
    return comments;
  }

  async findAll(): Promise<Comment[]> {
    const foundAllComments = await this.prisma.comment.findMany();
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
