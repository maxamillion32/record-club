import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: any = {}
  records: FirebaseListObservable<any>;
  constructor() { }

  ngOnInit() {
  }

}
