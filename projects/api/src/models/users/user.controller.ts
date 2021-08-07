import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { UserDto } from '@projects/shared/dto';

@Controller('users')
export class UserController {
  @Get('/:id')
  getTest(@Param('id') userId: number): string {
    return `hello! user id ${userId}`;
  }

  @Post()
  postTest(@Body() userDto: UserDto): UserDto {
    return userDto;
  }
}
