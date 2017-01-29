import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Record } from '../record.model';
import { RecordService } from '../record.service';
import { Router } from '@angular/router';

@Component({
  selector: 'record-edit',
  templateUrl: './record-edit.component.html',
  styleUrls: ['./record-edit.component.scss'],
  providers: [RecordService]
})
export class RecordEditComponent implements OnInit {
  @Input() record: Record;
  @Output() closeEdit = new EventEmitter();
  constructor(private rs: RecordService, private router: Router) { }

  ngOnInit() {
  }

  saveRecord(record: Record) {
    this.rs.saveRecord(record);
    this.router.navigate(['profile']);
    this.closeEdit.emit();
  }

}
