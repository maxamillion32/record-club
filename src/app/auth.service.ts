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
    var inputtedUser = user;
    var userlist = this.af.database.list('users');
    userlist.subscribe(users => {
      for (var i = 0; i < users.length; i++) {
        if(users[i].uid === inputtedUser.uid) {
          return;
        }
      }
      var newUser = new User(inputtedUser.auth.displayName, inputtedUser.uid, inputtedUser.auth.photoURL, "");
      this.users.push(newUser);
    });
  }

  saveProfile(newName: string, newPhoto: string, newDescription: string, key: string) {
    var userToUpdate = this.getUser(key);
    userToUpdate.update({
      displayName: newName,
      photoURL: newPhoto,
      description: newDescription,
      liveProfile: true
    });
  }

  deleteUser(user) {
    console.log(user.$key);
    var userToDelete = this.getUser(user.$key);

    userToDelete.remove();
  }


  getAllUsers() {
    return this.users;
  }

  getUser(key: string) {
    return this.af.database.object('/users/' + key);
  }



}
