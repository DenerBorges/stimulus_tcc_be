import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from '@prisma/client';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() comment: Comment): Promise<Comment> {
    return this.commentsService.create(comment);
  }

  @IsPublic()
  @Get()
  findAll(@Query('projectId') projectId: number): Promise<Comment[]> {
    return this.commentsService.findAll(projectId);
  }

  @IsPublic()
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Comment | null> {
    return this.commentsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() comment: Comment,
  ): Promise<Comment | null> {
    return this.commentsService.update(+id, comment);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.commentsService.remove(+id);
  }
}
