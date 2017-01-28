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
  constructor(private router: Router,
              private as: AuthService) { }





  ngOnInit() {
  }

}
