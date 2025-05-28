// book-dialog.service.ts
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookItem } from '../models/book.model';
import { BookDialogComponent } from '../components/environment/book-dialog/book-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class BookDialogService {
  constructor(private dialog: MatDialog) { }

  // Opens a dialog displaying detailed book info
  openBookDialog(book: BookItem) {
    this.dialog.open(BookDialogComponent, {
      width: '900px',         // Fixed width for desktop
      maxWidth: '95vw',       // Responsive on smaller screens
      height: '650px',        // Fixed height for desktop
      maxHeight: '90vh',      // Responsive on smaller screens
      data: book,
      disableClose: false,
      autoFocus: false,
    });
  }

}
