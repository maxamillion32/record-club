import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseObjectObservable, FirebaseListObservable  } from 'angularfire2';
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
    // this.users.subscribe((users) => {
    //   users.forEach(user => {
    //     if (user.uid!==newUser.uid) {
    //       that.users.push(newUser);
    //     } else {
    //       return;
    //     }
    //   });
    // });
  }

  userExist(user: any) {
    var tuser: any = this.af.database.list('/users', {
      query: {
        equalTo: user.uid
      }
    });
    return tuser;
  }



  getAllUsers() {
    return this.users;
  }

  getUser(uid: string) {
    var user: any = this.af.database.list('/users', {
      query: {
        equalTo: uid
      }
    });
    return user;
  }



}
