import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDescr'
})
export class ShortDescrPipe implements PipeTransform {

  transform(value: string): string {
    return value.slice(0, 120) + '...';
  }

}
