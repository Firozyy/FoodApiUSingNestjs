import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodSchema } from './schama/food.schema';

@Module({
  imports:[ MongooseModule.forFeature([{ name: 'Food', schema: FoodSchema }])],
  controllers: [FoodController],
  providers: [FoodService]
})
export class FoodModule {}
