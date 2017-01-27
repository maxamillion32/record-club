import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { RecordService } from '../record.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [RecordService]
})
export class HomeComponent implements OnInit {
  user: any = {}
  records: FirebaseListObservable<any>;
  constructor(private rs: RecordService) { }

  ngOnInit() {
    this.records = this.rs.getAllRecords();
  }

}
