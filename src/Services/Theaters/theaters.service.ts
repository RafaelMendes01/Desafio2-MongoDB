import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTheaterDto } from './dto/create-theater.dto';
import { UpdateTheaterDto } from './dto/update-theater.dto';
import { Theater, TheaterDocument } from './entities/theater.entity';

@Injectable()
export class TheatersService {
  constructor(@InjectModel(Theater.name) private theaterModel: Model<TheaterDocument>) {}
  async create(createTheaterDto: CreateTheaterDto) {
    const theaters = await this.theaterModel.create(createTheaterDto);
    return theaters;
  }

  async findAll() {
    return this.theaterModel.find();
  }

  async findAndPaginate(limit: number, skip: number){
    const skipValue = limit * (skip - 1)
    return this.theaterModel.find().limit(limit).skip(skipValue);
  }

  async findOne(id: string) {
    return this.theaterModel.findById(id);
  }

  async update(id: string, updateTheaterDto: UpdateTheaterDto) {
    const theaters = await this.theaterModel.findOneAndUpdate({_id: id}, updateTheaterDto, {new: true});
    return theaters;
  }

  async remove(id: string) {
    const theater = await this.theaterModel.deleteOne({_id: id}).exec();
    return theater
  }
}
