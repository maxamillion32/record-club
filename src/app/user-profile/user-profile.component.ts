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
  user: any;
  fbUsers: any;
  fbUser: any;
  liveprofile: boolean;
  showEdit: boolean = false;
  showRecords: boolean = true;
  showProfile: boolean = true;
  userRecords: any = [];
  constructor(private af: AngularFire, private as: AuthService, private rs: RecordService) {
    this.af.auth.subscribe(user => {
      if(user) {
        this.user = user;
        this.as.addUser(this.user);
      } else {
        this.user = null;
      }
    });
    this.as.getAllUsers().subscribe(users => {
      users.forEach(user => {
        if( this.user.uid === user.uid) {
          this.fbUser = user;
          this.liveprofile = user.liveProfile;
        }
      });
    });
    this.rs.getAllRecords().subscribe(records => {
      records.forEach(record => {
        if (this.user.uid === record.uid) {
          this.userRecords.push(record);
        }
      })
    })
  }

  updateUser(user: any) {
    this.as.updateUser(user);
  }

  showEditComp() {
    this.showEdit = true;
    this.showRecords = false;
    this.showProfile = false;
  }

  hideEditComp() {
    this.showEdit = false;
    this.showRecords = true;
    this.showProfile = true;
  }




  ngOnInit() {

  }
}
