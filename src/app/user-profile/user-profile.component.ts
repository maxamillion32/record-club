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
  displayName: string;
  photoURL: string;
  description: string;
  key: string;
  constructor(private af: AngularFire, private as: AuthService, private rs: RecordService) {
    this.af.auth.subscribe(user => {
      if(user) {
        this.user = user;
      }  else {
        this.user = {};
      }
    });
  }

  saveProfile() {
    this.as.saveProfile(this.displayName, this.photoURL, this.description, this.key);
  }





  ngOnInit() {
    console.log("yr in it");
    let that = this;
    if (this.user) {
      this.fbUser = this.as.userExist(this.user);
      this.fbUser.subscribe(user => {
        user.forEach(user => {
          this.displayName = user.displayName;
          this.photoURL = user.photoURL;
          this.description = user.description;
          this.key = user.$key
        });
      });
    }
  }

}
