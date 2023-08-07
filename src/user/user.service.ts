import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserProfileDto } from './dto/updateuserProfile-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { UserDocument } from 'src/auth/schemas/user.schema';


@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,

  ) { }
 

  async findAllUsers(): Promise<any> {
    const users = await this.userModel.find()
    return users;
  }

  async findOne(_id: string) {
    const user: UserDocument = await this.userModel.findOne({ _id });
    if(!user){
      throw new NotFoundException("user not found");
    };
    return user;
  };

  async updateUser(_id: string, updateUserDto: UpdateUserDto) {

    const user: UserDocument = await this.userModel.findOne({ _id })
    if (user) {
      user.IsAdmin = updateUserDto.IsAdmin

    }
    const updatedUser = await user.save()
    if (updatedUser) {
      return user;
    } else {
      throw new NotFoundException('User Not Found')
    }


  }

  async updateUserProfile(_id: string, updateUserProfileDto: UpdateUserProfileDto) {
const {name,email,password}=updateUserProfileDto;
    const user: UserDocument = await this.userModel.findById({ _id })
    if (user) {
     user.name =name || user.name
    
     user.email =email || user.email
     user.email =password || user.email
    }
    const updatedUser = await user.save()
    if (updatedUser) {
      return user;
    } else {
      throw new NotFoundException('User Not Found')
    }

return "user"
  }
  async removeUser(_id: string) {
    const user = await this.userModel.findByIdAndRemove({ _id });
    if (!user) {
      throw new NotFoundException('User Not Found')
    }
    return "user removed succsesfully";
  }
}
