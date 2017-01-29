import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss'],
  providers: [AuthService, RecordService]
})
export class MemberDetailComponent implements OnInit {
  memberId: string;
  fbUser: any;
  memberRecords: any[] = [];


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private as: AuthService,
    private rs: RecordService) {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
    });
    this.as.getUser(this.memberId).subscribe(user => {
      this.fbUser = user;
    });
    this.rs.getAllRecords().subscribe(records => {
      records.forEach(record => {
        if (this.fbUser.uid === record.uid) {
          this.memberRecords.push(record);
        }
      });
    });
  }

  ngOnInit() {
  }

}
