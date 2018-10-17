import { Injectable } from '@angular/core';

import { LoggerService } from '../logger.service';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private logger: LoggerService) { }

  getHeroes() {
    this.logger.log('获取用户...');
    return USERS;
  }
}
