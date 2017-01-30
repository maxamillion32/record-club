import { Pipe, PipeTransform } from '@angular/core';
import { Record } from './record.model';

@Pipe({
  name: 'record',
  pure: false
})
export class RecordPipe implements PipeTransform {

  transform(records: Record[], filter: string): any {
    var output = [];
    records.forEach(record => {
      if (filter === undefined) {
        output.push(record);
      }
      else if (record.artist.includes(filter)) {
        output.push(record);
      }
    });
    return output;
  }
}
