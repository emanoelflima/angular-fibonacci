import { Injectable } from '@angular/core';
import { SearchEntry } from '../model/searchEntry';
import { SearchHistory } from '../model/searchHistory';

/**
 * Service to handle Fibonacci operations.
 * @author Emanoel de Lima
 */
@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  constructor() {
  }

  /**
   * The search history data.
   */
  private searchHistory: SearchHistory = new SearchHistory();

  /**
   * Retrieves the search history.
   * @returns The available search history, if exists.
   */
  async getSearchHistory(): Promise<SearchHistory> {
    this.searchHistory = await this.loadHistoryData();
    return this.searchHistory;
  }

  /**
   * Retrieves the Fibonacci sequence of given number.
   * @param number the number to calculate its Fibonacci sequence.
   * @returns 
   */
  public getFibonacci(number: number): number {
    const fibonacci = this.calculateFibonacci(number);
    const searchEntry = new SearchEntry (number, fibonacci, new Date());
    this.searchHistory.searchEntries.push(searchEntry);
    this.saveHistoryData();
    return fibonacci;
  }

  /**
   * Calculates the fibonacci value of given number.
   * @param number the number to calculate its fibonacci sequence.
   * @returns the calculated value.
   */
  private calculateFibonacci(number: number): number {

    if (number === 0) {
      return 0;
    }

    if (number === 1) {
      return 1;
    }

    return this.calculateFibonacci(number-1) + this.calculateFibonacci(number-2);
  }

  /**
   * Loads the search history from the local storage.
   * @returns found local data, or an empty object.
   */
  private async loadHistoryData() {
    const searchData = localStorage.getItem("search-data");
    const jsonData = await JSON.parse(searchData || "");
    return jsonData;
  }

  /**
   * Saves the search history into the local storage.
   */
  private async saveHistoryData() {
    const data = JSON.stringify(this.searchHistory);
    localStorage.setItem('search-data', data);
  }
}
