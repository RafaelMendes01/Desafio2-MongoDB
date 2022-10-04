import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('sessions')
@ApiBearerAuth('JWT-auth')
@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionsService.create(createSessionDto);
  }

  @Get()
  findAll() {
    return this.sessionsService.findAll();
  }

  @Get('paginate')
  findAndPaginate(@Query('limit') limit: number, @Query('skip') skip: number) {
    return this.sessionsService.findAndPaginate(limit, skip);
  }

  @Get('count')
  findAndCount() {
    return this.sessionsService.findAndCount();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sessionsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionsService.update(id, updateSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sessionsService.remove(id);
  }
}
