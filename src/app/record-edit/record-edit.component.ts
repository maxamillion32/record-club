import { Component, OnInit, Input } from '@angular/core';
import { Record } from '../record.model';

@Component({
  selector: 'record-edit',
  templateUrl: './record-edit.component.html',
  styleUrls: ['./record-edit.component.scss']
})
export class RecordEditComponent implements OnInit {
  @Input() record: Record;
  constructor() { }

  ngOnInit() {
  }

}
