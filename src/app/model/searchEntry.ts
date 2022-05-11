/**
 * Model class for search entries.
 * @author Emanoel de Lima
 */
export class SearchEntry {
    public number: number;
    public fibonacci: number;
    public searchTimestamp: Date;

    constructor(number: number, fibonacci: number, searchTimestamp: Date) {
        this.number = number;
        this.fibonacci = fibonacci;
        this.searchTimestamp = searchTimestamp;
    }
}