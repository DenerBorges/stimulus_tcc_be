import { Controller, Get, Post, Body } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { Donation } from '@prisma/client';

@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post()
  create(@Body() donation: Donation): Promise<Donation> {
    return this.donationsService.create(donation);
  }

  @Get()
  findAll(): Promise<Donation[]> {
    return this.donationsService.findAll();
  }
}
