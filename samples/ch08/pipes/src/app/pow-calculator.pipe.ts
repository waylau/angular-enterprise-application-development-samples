import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'powCalculator'})
export class PowCalculatorPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}
