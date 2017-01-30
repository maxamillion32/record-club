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

  getRecord(key: string) {
    return this.af.database.object('records/' + key);
  }

  saveRecord(record) {
    var recordToUpdate = this.getRecord(record.$key)
    recordToUpdate.update({
      artist: record.artist,
      title: record.title,
      label: record.label,
      speed: record.speed,
      coverImg: record.coverImg,
      description: record.description
    });
  }

  deleteRecord(record) {
    var recordToDestroy = this.getRecord(record.$key);
    recordToDestroy.remove();
  }

  deleteMultipleRecords(uid) {
    let records = this.getAllRecords()
    records.forEach( records => {
      records.forEach(record => {
        if (record.uid === uid) {
          var recordToDestroy = this.getRecord(record.$key);
          recordToDestroy.remove();
        }
      })
    });
  }


}
