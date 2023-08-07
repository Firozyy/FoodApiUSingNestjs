import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/LoginDto';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @ApiTags("public")
  @Post("/register")
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signUp(createAuthDto);
  }
 
  @Get('/login')
  @ApiTags("public")
  login(@Body() loginDto: LoginDto, @Req() req: Request, @Res({ passthrough: true }) res: Response): Promise<{ token: string }> {
    return this.authService.login(loginDto, req, res);
  }








}
