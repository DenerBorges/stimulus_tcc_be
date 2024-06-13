import { Controller, Get, Post, Body } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { Donation } from '@prisma/client';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post()
  create(@Body() donation: Donation): Promise<Donation> {
    return this.donationsService.create(donation);
  }

  @IsPublic()
  @Get()
  findAll(): Promise<Donation[]> {
    return this.donationsService.findAll();
  }
}
