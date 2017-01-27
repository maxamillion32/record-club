import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
  providers: [RecordService]
})
export class RecordsComponent implements OnInit {
  records: FirebaseListObservable<any[]>;
  constructor(private rs: RecordService) { }

  ngOnInit() {
  this.records = this.rs.getAllRecords();
  console.log(this.records)
  }

}
