import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from './auth.service';
import { FirebaseListObservable } from 'angularfire2';
@Pipe({
  name: 'getname',
  pure: false
})
export class GetnamePipe implements PipeTransform {
  constructor(private as: AuthService) {}

  transform(uid: string) {
    var user = this.as.getUserName(uid);
    console.log(user)
  }

}
