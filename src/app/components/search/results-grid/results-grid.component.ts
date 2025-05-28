import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BookItem } from '../../../models/book.model';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { ResultsItemComponent } from '../results-item/results-item.component';
import { CardType } from '../../../models/card-type.model';

@Component({
  selector: 'app-results-grid',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatIconModule, 
    ResultsItemComponent
  ],
  templateUrl: './results-grid.component.html',
  styleUrl: './results-grid.component.scss'
})
export class ResultsGridComponent {
  // Input setter to update results, reset pagination, and update displayed results
  @Input() 
  set results(value: BookItem[]) {
    this._results = value || [];
    this.pageIndex = 0; // Reset pagination on new results
    this.updateDisplayedResults();
  }
  get results(): BookItem[] {
    return this._results;
  }

  // Type used to indicate display mode ('search-item' or 'wishlist-item')
  @Input() type: CardType = 'search-item';

  // Internal storage for results
  private _results: BookItem[] = [];

  // Currently displayed subset of results based on pagination
  displayedResults: BookItem[] = [];

  // Pagination settings
  pageSize = 5;
  pageIndex = 0;

  // Triggered by paginator when user changes page or page size
  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateDisplayedResults();
  }

  // Updates the displayed results according to pagination
  private updateDisplayedResults(): void {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.displayedResults = this._results.slice(start, end);
  }
}
