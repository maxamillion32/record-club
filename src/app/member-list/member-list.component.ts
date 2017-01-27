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
  constructor() { }

  goToMemberDetail(userId: string) {
    this.memberSender.emit(userId);
  }

  ngOnInit() {
  }

}
