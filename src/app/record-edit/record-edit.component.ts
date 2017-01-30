import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Record } from '../record.model';
import { RecordService } from '../record.service';

@Component({
  selector: 'record-edit',
  templateUrl: './record-edit.component.html',
  styleUrls: ['./record-edit.component.scss'],
  providers: [RecordService]
})
export class RecordEditComponent implements OnInit {
  @Input() record: Record;
  @Output() closeEdit = new EventEmitter();
  constructor(private rs: RecordService) { }

  ngOnInit() {
  }

  saveRecord(record: Record) {
    this.rs.saveRecord(record);
    window.location.reload();
  }

  deleteRecord(record: Record) {
    this.rs.deleteRecord(record);
    window.location.reload();
  }

  closeEditDiv() {
    this.closeEdit.emit();
  }

}
