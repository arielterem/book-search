import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { BookSearchService } from '../../../services/book-search.service';
import { BookItem } from '../../../models/book.model';
import { ResultsGridComponent } from '../results-grid/results-grid.component';
import { LoaderComponent } from '../../environment/loader/loader.component';
import { of } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ResultsGridComponent,
    LoaderComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  // FormControl for the search input field
  searchControl = new FormControl('');

  // Array to store book search results
  results: BookItem[] = [];

  // Loading indicator to show while fetching results
  loading = false;

  constructor(
    private bookSearchService: BookSearchService // Service to query books via API
  ) {}

  ngOnInit(): void {
    this.initializeSearch();
  }

  // Initialize search input listener with debounce and distinct until changed
  private initializeSearch(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(400), // Wait 400ms after user stops typing
        distinctUntilChanged(), // Only proceed if the search term changed
        switchMap(query => { // Use switchMap to cancel previous requests and only process the latest search query result ;)
          const trimmed = (query || '').trim();

          // If search query is empty, clear results and do not call API
          if (!trimmed) {
            this.results = [];
            this.loading = false;
            return of([]); // <-- Return an empty Observable to keep the stream alive
          }

          this.loading = true; // Show loading spinner
          return this.bookSearchService.searchBooks(trimmed); // Fetch results
        })
      )
      .subscribe(results => {
        this.loading = false;  // Hide loading spinner
        this.results = results; // Update displayed results
      });
  }
}
