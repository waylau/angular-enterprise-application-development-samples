import { Injectable } from '@angular/core';

export class User {
  constructor(public name: string, public state = 'inactive') { }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}

const ALL_USERS = [
  'Way Lau',
  'Narco',
  'Bombasto'
].map(name => new User(name));

@Injectable()
export class UserService {

  users: User[] = [];

  getAllUsers() {
    this.users = ALL_USERS;
    return this.users;
  }

  canAdd() {
    return this.users.length < ALL_USERS.length;
  }

  canRemove() {
    return this.users.length > 0;
  }

  addActive(active = true) {
    let user = ALL_USERS[this.users.length];
    user.state = active ? 'active' : 'inactive';
    this.users.push(user);
  }

  addInactive() {
    this.addActive(false);
  }

  remove() {
    this.users.length -= 1;
  }

  removeAllUsers() {
    this.users = [];
  }
}
