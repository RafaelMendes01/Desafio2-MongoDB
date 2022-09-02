
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type SessionsDocument = Sessions & Document;

@Schema()
export class Sessions {
    @Prop()
    jwt: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'users' })
    user_id: string;
}

export const SessionsSchema = SchemaFactory.createForClass(Sessions);



