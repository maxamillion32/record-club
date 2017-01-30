import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AuthService, RecordService]
})
export class AdminComponent implements OnInit {
  users: any;
  constructor(private as: AuthService, private rs: RecordService) {
   }

  ngOnInit() {
    this.users = this.as.getAllUsers();
  }

  deleteUser(user) {
    this.rs.deleteMultipleRecords(user.uid);
    this.as.deleteUser(user);
  }

}
