import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsBoolean, IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';





export class UpdateUserProfileDto extends PartialType(CreateUserDto) {

   
    
    readonly name: string;
  
    
    
    readonly email: string;
  
   
   
    
    readonly password: string;
}
