import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { FoodModule } from './food/food.module';
@Module({


  imports: [
    
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    MongooseModule.forRoot(process.env.Mongo_Uri,),
    AuthModule,
    UserModule,
    FoodModule
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }
