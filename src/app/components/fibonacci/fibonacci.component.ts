import { Component, OnInit } from '@angular/core';
import { FibonacciService } from 'src/app/services/fibonacci.service';

/**
 * Controller of the Fibonacci component.
 * @author Emanoel de Lima
 */
@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent implements OnInit {

  constructor(private fibonacciService: FibonacciService) { }

  ngOnInit(): void {
  }

  public fibonacciValue: number | undefined;
  public inputValue: number | undefined;

  calculateFibonacci(number: any) {
    this.fibonacciValue = undefined;
    this.fibonacciValue = this.fibonacciService.getFibonacci(Number(number));
    this.inputValue = number;
  }

}
