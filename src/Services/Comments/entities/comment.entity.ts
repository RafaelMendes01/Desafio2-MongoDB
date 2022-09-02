
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type CommentsDocument = Comments & Document;

@Schema()
export class Comments {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    date: Date

    @Prop()
    text: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'movies' })
    movie_id: string;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);


