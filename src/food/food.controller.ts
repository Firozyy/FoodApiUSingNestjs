import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@Controller('food')

export class FoodController {
  constructor(private readonly foodService: FoodService) { }
@ApiTags("admin")
  @Post("/create")
  @UseGuards(AuthGuard("admin"))
  create(@Body() createFoodDto: CreateFoodDto) {
    
    
    return this.foodService.create(createFoodDto);
  }
  @ApiTags("public")
  @Get("/allfoods")
  findAllmenu() {
    return this.foodService.findAllmenu();
  }
  @ApiTags("public")
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodService.findOne(id);
  }
  @ApiTags("admin")
  @Put(':id')
  @UseGuards(AuthGuard("admin"))
  update(@Param('id') id: string, @Body() updateFoodDto: UpdateFoodDto) {
   
    
    return this.foodService.update(id, updateFoodDto);
  }
  @ApiTags("admin")
  @Delete(':id')
  @UseGuards(AuthGuard("admin"))
  remove(@Param('id') id: string) {
    return this.foodService.remove(id);
  }
}
