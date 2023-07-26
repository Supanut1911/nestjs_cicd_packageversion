import { Controller, Get } from '@nestjs/common';

@Controller('profile')
export class ProfileController {
  @Get()
  getProfile() {
    return 'yo profile';
  }

  @Get('high')
  gethigh() {
    return 'yooox';
  }

  @Get('low')
  getlow() {
    return 'lowx';
  }
}
