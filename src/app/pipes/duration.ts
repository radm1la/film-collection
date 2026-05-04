import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationPipe',standalone: true
})
export class Duration implements PipeTransform {

  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    if(hours === 0){
      return `${minutes}m`;
    } 
    if(minutes === 0){
      return `${hours}h`;
    }
    return `${hours}h ${minutes}m`;
  }

}
