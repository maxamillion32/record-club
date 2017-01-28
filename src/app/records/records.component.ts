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
  records: any[] = [];
  constructor(private rs: RecordService) {
    this.rs.getAllRecords().subscribe(records => {
      records.forEach(record => {
          this.records.push(record);
      });
    });
  }

  ngOnInit() {

  }

}
