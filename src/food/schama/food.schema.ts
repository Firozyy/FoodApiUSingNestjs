import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
  timestamps: true,
})

export class Food {

  @Prop({ required: true })
  name: string;



  @Prop({ required: true })
  desc: string;
  @Prop({ required: true })
  price: string;
}

export const FoodSchema = SchemaFactory.createForClass(Food);