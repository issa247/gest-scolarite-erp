import { Controller, Get, Post, Req, Body, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
@UseGuards(JwtAuthGuard)
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  async findAll(@Req() req: any) {
    return this.notificationsService.findAll(req.user.schoolId);
  }

  @Post()
  async create(@Req() req: any, @Body() body: { message: string }) {
    return this.notificationsService.create(req.user.schoolId, body.message);
  }
}
