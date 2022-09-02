import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie, MovieDocument } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(@InjectModel(Movie.name) private movieModel: Model<MovieDocument>) { }
  async create(createMovieDto: CreateMovieDto) {
    const movies = await this.movieModel.create(createMovieDto);
    return movies;
  }

  async findAll() {
    return this.movieModel.find();
  }

  async findOne(id: string) {
    return this.movieModel.findById(id);
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    const movies = await this.movieModel.updateOne({ _id: id }, updateMovieDto, { new: true });
    return movies;
  }

  async remove(id: string) {
    const movie = await this.movieModel.deleteOne({ _id: id }).exec();
    return movie
  }
}
