
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type CommentsDocument = Comments & Document;

@Schema()
export class Comments {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    email: string;

    @Prop({required: true})
    date: Date

    @Prop({required: true})
    text: string

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'movies', required: true })
    movie_id: string;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);


