import { Component, OnInit } from '@angular/core';
import { SearchHistory } from 'src/app/model/searchHistory';
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

  async ngOnInit(): Promise<void> {
    this.searchHistory = await this.fibonacciService.getSearchHistory();
  }

  public fibonacciValue: number | undefined;
  public inputValue: number | undefined;
  public searchHistory: SearchHistory = new SearchHistory();

  public async calculateFibonacci(number: any) {
    this.fibonacciValue = undefined;
    this.fibonacciValue = this.fibonacciService.getFibonacci(Number(number));
    this.inputValue = number;

    this.searchHistory = await this.fibonacciService.getSearchHistory();
  }

  public hasSearchHistory(): boolean {
    return this.searchHistory !== undefined
      && this.searchHistory.searchEntries !== undefined
      && this.searchHistory.searchEntries.length > 0
  }

}
