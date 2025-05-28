import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BookApiResponse, BookItem } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookSearchService {

  private apiUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) { }

  searchBooks(query: string): Observable<BookItem[]> {
    return this.http.get<BookApiResponse>(`${this.apiUrl}${query}&maxResults=20`).pipe(
      // Map API response to just the array of books or empty array if no results
      map(response => response.items || [])
    );
  }
}
