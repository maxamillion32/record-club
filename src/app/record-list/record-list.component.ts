import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.scss'],
  providers: [AuthService]
})
export class RecordListComponent implements OnInit {
  @Input() records: FirebaseListObservable<any[]>;
  constructor(private as: AuthService) { }

  ownerName(uid: string) {
    return this.as.getOwnerName(uid);
  }

  ngOnInit() {
  }

}
