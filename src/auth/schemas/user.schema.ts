import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = User & Document;
@Schema({
  timestamps: true,
})

export class User extends Document {
  @Prop()
  name: string;

  @Prop({ unique: [true, 'Duplicate email entered'] })
  email: string;

  @Prop()
  password: string;
  @Prop({ default: false })
  IsAdmin: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
