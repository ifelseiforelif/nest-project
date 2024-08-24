import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { IUser } from 'src/model/IUser';

@Controller('user')
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): Array<IUser> {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() user: IUser) {
    return this.userService.createUser(user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    console.log(id);
  }
}
