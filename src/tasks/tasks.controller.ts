import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly service: TasksService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body('title') title: string) {
    return this.service.create(title);
  }

  @Patch(':id')
  updateTitle(@Param('id') id: string, @Body('title') title: string) {
    return this.service.updateTitle(Number(id), title);
  }

  @Patch(':id/toggle')
  toggle(@Param('id') id: string) {
    return this.service.toggle(Number(id));
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(Number(id));
  }
}
