import { Injectable } from '@angular/core';

/**
 * Service to handle Fibonacci operations.
 * @author Emanoel de Lima
 */
@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  constructor() { }

  /**
   * Calculates the fibonacci value of given number.
   * @param number the number to calculate its fibonacci sequence.
   * @returns the calculated value.
   */
  getFibonacci(number: number): number {

    if (number === 0) {
      return 0;
    }

    if (number === 1) {
      return 1;
    }

    return this.getFibonacci(number-1) + this.getFibonacci(number-2);
  }
}
