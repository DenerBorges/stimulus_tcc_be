import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { Project } from '@prisma/client';
import { CreateProjectDto } from './dto/create-project.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { FilesInterceptor } from '@nestjs/platform-express/multer';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('images'))
  create(
    @Body() createProjectDto: CreateProjectDto,
    @UploadedFiles() images: Express.Multer.File[],
  ): Promise<Project> {
    return this.projectsService.create(createProjectDto, images);
  }

  @IsPublic()
  @Get()
  findAll(): Promise<Project[]> {
    return this.projectsService.findAll();
  }

  @IsPublic()
  @Get('search')
  searchProjects(@Query('name') name: string): Promise<Project[] | null> {
    return this.projectsService.searchProjects(name);
  }

  @IsPublic()
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Project | null> {
    return this.projectsService.findOne(+id);
  }

  @Put(':id')
  @UseInterceptors(FilesInterceptor('images'))
  update(
    @Param('id') id: number,
    @UploadedFiles() images: Express.Multer.File[],
    @Body() project: Project,
  ): Promise<Project | null> {
    return this.projectsService.update(+id, project, images);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.projectsService.remove(+id);
  }
}
