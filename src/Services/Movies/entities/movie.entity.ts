import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import Imdb from '../Interfaces/I-Imdb';
import Awards from '../Interfaces/IAwards';
import Tomatoes from '../Interfaces/ITomatoes';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop({type: Object})
  awards: Awards;

  @Prop({type: Array})
  cast: string;

  @Prop({type: Array})
  countries: string;

  @Prop({type: Array})
  directors: string;

  @Prop()
  fullplot: string;

  @Prop({type: Array})
  genres: string;

  @Prop({type: Object})
  imdb: Imdb;

  @Prop({type: Array})
  languages: string;

  @Prop()
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

  @Prop()
  title: string;

  @Prop({type: Object})
  tomatoes: Tomatoes;

  @Prop()
  type: string;

  @Prop({type: Array})
  writers: string;

  @Prop()
  year: number;
}
export const MovieSchema = SchemaFactory.createForClass(Movie);

