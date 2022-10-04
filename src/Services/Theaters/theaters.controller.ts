import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TheatersService } from './theaters.service';
import { CreateTheaterDto } from './dto/create-theater.dto';
import { UpdateTheaterDto } from './dto/update-theater.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('theaters')
@ApiBearerAuth('JWT-auth')
@Controller('theaters')
export class TheatersController {
  constructor(private readonly theatersService: TheatersService) {}

  @Post()
  create(@Body() createTheaterDto: CreateTheaterDto) {
    return this.theatersService.create(createTheaterDto);
  }

  @Get()
  findAll() {
    return this.theatersService.findAll();
  }

  @Get('paginate')
  findAndPaginate(@Query('limit') limit: number, @Query('skip') skip: number) {
    return this.theatersService.findAndPaginate(limit, skip);
  }

  @Get('count')
  findAndCount() {
    return this.theatersService.findAndCount();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.theatersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTheaterDto: UpdateTheaterDto) {
    return this.theatersService.update(id, updateTheaterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.theatersService.remove(id);
  }
}
