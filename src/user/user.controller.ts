import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserDto } from './dto/User.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/')
  getAllUser() {
    return this.userService.getAll();
  }
  @Post('/')
  creteUser(@Body() userDto: UserDto) {
    return this.userService.create(userDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get('/profile/:id')
  getProfile(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getProfile(id);
  }
}
