import { Component, OnInit } from '@angular/core';
import { RecordService } from '../record.service';
import { AuthService } from '../auth.service';
import { AngularFire } from 'angularfire2';
import { Record } from '../record.model';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss'],
  providers: [AuthService, RecordService]
})
export class AddRecordComponent implements OnInit {
  user: any = {};
  constructor(private af: AngularFire, private as: AuthService, private rs: RecordService) {
    this.af.auth.subscribe(user => {
      if(user) {
        this.user = user;
      }  else {
        this.user = {};
      }
    });
  }

  addNewRecord(artist: string, title: string, label: string, speed: string, coverImg: string, description: string, uid: string) {
    var newRecord = new Record(artist, title, label, speed, this.user.uid, coverImg, description);
    this.rs.addRecord(newRecord);
  }


  ngOnInit() {
    this.as.addUser(this.user);
  }

}
