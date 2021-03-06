import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.scss'],
  providers: [AuthService]
})

export class RecordListComponent implements OnInit {
  @Input() records: any[];
  allUsers: any = [];
  editRecord: boolean = false;
  route: string;
  filter: string;
  constructor(
    private router: Router,
    private as: AuthService) {
      this.route = this.router.url;
      this.as.getAllUsers().subscribe(users => {
        users.forEach(user => {
          this.allUsers.push(user);
        })
      });
    }

  getUser(uid: string) {
    let nameToDisplay: string;
    this.allUsers.forEach(user => {
      if(user.uid === uid) {
        nameToDisplay = user.displayName;
      }
    });
    return nameToDisplay;
  }
  getUserKey(uid: string) {
    let key: string;
    this.allUsers.forEach(user => {
      if(user.uid === uid) {
        key = user.$key;
      }
    });
    return key;
  }

  showEditRecord() {
    this.editRecord = true;
  }

  hideEditRecord() {
    this.editRecord = false;
  }

  memberDetailLink(key: string) {
    this.router.navigate(['member/' + key]);
    window.scrollTo(0,0);
  }



  ngOnInit() {
    console.log(this.route);
  }

}
