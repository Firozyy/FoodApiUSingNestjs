import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodDto } from './create-food.dto';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
export class UpdateFoodDto extends PartialType(CreateFoodDto) {
@IsNotEmpty()
@IsString()
readonly name: string;

@IsNotEmpty()
@IsString()
readonly desc: string;

@IsNotEmpty()
@IsString()

readonly price: string;
}






 

