import { Controller, Get, Post, Body,Put, Patch, Param, Delete,UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserProfileDto } from './dto/updateuserProfile-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}



  @Get()
  @ApiTags("admin")
  @UseGuards(AuthGuard("admin"))
  findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  @ApiTags("admin")
  @UseGuards(AuthGuard("admin"))
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  @ApiTags("admin")
  @UseGuards(AuthGuard("admin"))
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }
  @Put('/profile/:id')
  @ApiTags("userOnly")
  @UseGuards(AuthGuard("user"))
  updateUserProfile(@Param('id') id: string, @Body() updateUserProfileDto: UpdateUserProfileDto) {
    return this.userService.updateUserProfile(id, updateUserProfileDto);
  }

  @Delete(':id')
  @ApiTags("admin")
  @UseGuards(AuthGuard("admin"))
  removeUser(@Param('id') id: string) {
    return this.userService.removeUser(id);
  }
}
