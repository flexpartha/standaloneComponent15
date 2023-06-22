import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformPipe',
  standalone: true
})
export class TransformPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
