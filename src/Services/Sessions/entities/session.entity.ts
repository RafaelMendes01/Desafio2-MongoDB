
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type SessionsDocument = Sessions & Document;

@Schema()
export class Sessions {
    @Prop({required: true})
    jwt: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true })
    user_id: string;
}

export const SessionsSchema = SchemaFactory.createForClass(Sessions);



