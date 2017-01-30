import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  @Input() users: FirebaseListObservable<any[]>;
  @Output() memberSender = new EventEmitter();
  @Output() deleteSender = new EventEmitter();
  constructor() { }

  goToMemberDetail(userId: string) {
    this.memberSender.emit(userId);
  }

  ngOnInit() {
  }

  deleteUser(user) {
    if(confirm("Do you Really Want to Delete this User?")) {
      this.deleteSender.emit(user);
    }
  }

}
