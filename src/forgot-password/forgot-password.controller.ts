import { Body, Controller, Post } from '@nestjs/common';
import { ForgotPasswordService } from './forgot-password.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { User } from '@prisma/client';

@Controller()
export class ForgotPasswordController {
  constructor(private readonly forgotPasswordService: ForgotPasswordService) {}

  @IsPublic()
  @Post('forgot-password')
  sendResetCode(@Body() user: User) {
    return this.forgotPasswordService.sendResetCode(user.email);
  }

  @IsPublic()
  @Post('reset-password')
  resetPassword(@Body() user: User) {
    return this.forgotPasswordService.resetPassword(
      user.email,
      user.resetCode,
      user.password,
    );
  }
}
