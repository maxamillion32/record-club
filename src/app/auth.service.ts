import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { User } from './user.model';

@Injectable()
export class AuthService {
  users: any = [];
  constructor(private af: AngularFire) {
    this.users = af.database.list('/users');
  }

  login() {
    return this.af.auth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup
    });
  }

  logout() {
    return this.af.auth.logout();
  }

  addUser(user: any) {
    let that = this;
    var newUser = new User(user.auth.displayName, user.uid, user.auth.photoURL, "");
    this.users.subscribe((users) => {
      users.forEach(user => {
        if (user.uid!==newUser.uid) {
          that.users.push(newUser);
        }
      });
    });
  }

  getAllUsers() {
    return this.users;
  }

  getUserName(uid: string) {
    this.users.forEach(user => {
      if (user.uid === uid) {
        return user.displayName
      }
    });
  }



}
