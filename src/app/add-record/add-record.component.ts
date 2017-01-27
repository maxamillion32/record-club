import { Component, OnInit } from '@angular/core';
import { RecordService } from '../record.service';
import { AuthService } from '../auth.service';
import { AngularFire } from 'angularfire2';

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


  ngOnInit() {
  }

}
