import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numword'
})
export class NumwordPipe implements PipeTransform {

  transform(num: number, word1: string, word2: string, word5: string): string {
    const dd = num % 100;
    if ( (dd >= 11) && (dd <= 19) ) {
      return `${num} ${word5}`;
    }
    const d = num % 10;
    if ( d === 1 ) {
      return `${num} ${word1}`;
    }
    if ( (d >= 2) && (d <= 4) ) {
      return `${num} ${word2}`;
    }
    return `${num} ${word5}`;
  }
}
