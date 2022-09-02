import location from '../Interfaces/ILocation';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TheaterDocument = Theater & Document;

@Schema()
export class Theater {
  @Prop()
  theaterId: number

  @Prop({type: Object})
  location: location
}

export const TheaterSchema = SchemaFactory.createForClass(Theater);

