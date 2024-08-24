import { Injectable } from '@nestjs/common';
import { IUser } from 'src/model/IUser';

@Injectable()
export class UserService {
  private users: Array<IUser> = [{ id: 1, name: 'alex', surname: 'ivanenko' }];
  getUsers(): Array<IUser> {
    return this.users;
  }
  createUser(user: IUser) {
    if (user as IUser) {
      this.users.push(user);
    }

    return this.users;
  }
}
