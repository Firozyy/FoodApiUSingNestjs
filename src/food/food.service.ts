import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Food } from './schama/food.schema';
import { Model } from 'mongoose';

@Injectable()
export class FoodService {
  constructor(
    @InjectModel(Food.name)
    private foodModel: Model<Food>,

  ) { }
  async create(createFoodDto: CreateFoodDto) {

 
    
    const food = await this.foodModel.create(createFoodDto);
    return food;
  }



  async findAllmenu() {
    const food = await this.foodModel.find()
    return food;
  }

  async findOne(_id: string) {
    const food = await this.foodModel.findById({ _id })
    if (!food) {
      throw new BadRequestException(" food item not found");
    }
    return food;
  }

  async update(_id: string, updateFoodDto: UpdateFoodDto) {
   const {name,desc,price}=updateFoodDto
    const food = await this.foodModel.findById({_id});
    if (food) {
      food.name = name || food.name;
      food.price = price || food.price;
      food.desc = desc || food.desc;

    


      const updatedFood = await food.save()
      return updatedFood;
  } else {
      
      throw new BadRequestException("product not found")
  }
   
  }

  async remove(_id: string) {
    const food = await this.foodModel.findOneAndDelete({ _id })
    if (!food) {
      throw new BadRequestException(" food item not found");
    }
    return "removed succesfully";
  }
}
