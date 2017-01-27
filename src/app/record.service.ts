import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Record } from './record.model';

@Injectable()


export class RecordService {
  records: any = [];
  constructor(private af: AngularFire) {
    this.records = af.database.list('/records');
  }

  getAllRecords() {
    return this.records;
  }


  addRecord(record: Record) {
    this.records.push(record);
  }


}
