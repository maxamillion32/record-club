import { Component, OnInit } from '@angular/core';
import { RecordService } from '../record.service';
import { AuthService } from '../auth.service';
import { AngularFire } from 'angularfire2';
import { Record } from '../record.model';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [AuthService, RecordService]
})
export class UserProfileComponent implements OnInit {
  user: any = {};
  fbUser: any;
  constructor(private af: AngularFire, private as: AuthService, private rs: RecordService) {
    this.af.auth.subscribe(user => {
      if(user) {
        this.user = user;
      }  else {
        this.user = {};
      }
    });
  }

  displayName:string;



  ngOnInit() {
    this.fbUser = this.as.userExist(this.user);
    this.fbUser.subscribe(user => {
        user.forEach(user => {
          this.displayName = this.user.displayName;
        });
      });
    console.log(this.displayName)
  }

}
