import { Injectable } from '@nestjs/common';
import { IUser } from 'src/model/IUser';

@Injectable()
export class UserService {
  private users: Array<IUser> = [{ id: 1, name: 'alex', surname: 'ivanenko' }];
  getUsers(): Array<IUser> {
    return this.users;
  }
  createUser(user: IUser) {
    if (
      typeof user.id === 'number' &&
      typeof user.name === 'string' &&
      typeof user.surname === 'string'
    )
      this.users.push(user);

    return this.users;
  }
}
