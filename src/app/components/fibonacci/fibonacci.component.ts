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

  /** The FibonacciValue found on the last search */
  public fibonacciValue: number | undefined;

  /** The number inputted by the user on its last search */
  public inputValue: number | undefined;

  /** The search history data */
  public searchHistory: SearchHistory = new SearchHistory();

  /**
   * Calculates the Fibonacci sequence of given number.
   * @param number the number to calculate its sequence.
   */
  public async calculateFibonacci(number: any) {
    this.fibonacciValue = undefined;
    this.fibonacciValue = this.fibonacciService.getFibonacci(Number(number));
    this.inputValue = number;

    this.searchHistory = await this.fibonacciService.getSearchHistory();
  }

  /**
   * Indicates whether there is a valid search history with data.
   * @returns true or false.
   */
  public hasSearchHistory(): boolean {
    return this.searchHistory !== undefined
      && this.searchHistory.searchEntries !== undefined
      && this.searchHistory.searchEntries.length > 0
  }

}
