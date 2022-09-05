import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import Imdb from '../Interfaces/I-Imdb';
import Awards from '../Interfaces/IAwards';
import Tomatoes from '../Interfaces/ITomatoes';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop({type: Object, required: true})
  awards: Awards;

  @Prop({type: Array})
  cast: string;

  @Prop({type: Array, required: true})
  countries: string;

  @Prop({type: Array})
  directors: string;

  @Prop()
  fullplot: string;

  @Prop({type: Array})
  genres: string;

  @Prop({type: Object, required: true})
  imdb: Imdb;

  @Prop({type: Array})
  languages: string;

  @Prop({required: true})
  lastupdated: string;

  @Prop()
  metacritic: number;

  @Prop()
  num_mflix_comments: number;

  @Prop()
  plot: string;

  @Prop()
  poster: string;

  @Prop()
  rated: string;

  @Prop()
  released: Date;
  
  @Prop()
  runtime: number;

  @Prop({required: true})
  title: string;

  @Prop({type: Object})
  tomatoes: Tomatoes;

  @Prop({required: true})
  type: string;

  @Prop({type: Array})
  writers: string;

  @Prop({required: true})
  year: number;
}
export const MovieSchema = SchemaFactory.createForClass(Movie);

