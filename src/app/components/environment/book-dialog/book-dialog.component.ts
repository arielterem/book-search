import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltip } from '@angular/material/tooltip';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-book-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatTooltip
  ],
  templateUrl: './book-dialog.component.html',
  styleUrl: './book-dialog.component.scss'
})
export class BookDialogComponent implements OnInit {

  // Tracks if the current book is in the wishlist
  isInWishlist = true;

  // Stores metadata fields to display about the book
  infoCards: { label: string; icon: string; value: string }[] = [];
  
  constructor(
    public dialogRef: MatDialogRef<BookDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public book: any,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    // Populate info cards with key book metadata
    this.setInfo()

    // Check if the current book is already in the wishlist
    this.isInWishlist = this.sharedService.isInWishlist(this.book.id);
  }

  // Add or remove the book from the wishlist
  toggleWishlist() {
    if (this.isInWishlist) {
      this.sharedService.removeFromWishlist(this.book.id);
    } else {
      this.sharedService.addToWishlist(this.book);
    }
    this.isInWishlist = !this.isInWishlist;
  }

  // Close the dialog
  closeDialog() {
    this.dialogRef.close();
  }

  // Populate info cards with key book metadata
  setInfo(){
    this.infoCards = [
      {
        label: 'Publisher',
        icon: 'apartment',
        value: this.book.volumeInfo?.publisher || 'Unknown'
      },
      {
        label: 'Published',
        icon: 'event',
        value: this.book.volumeInfo?.publishedDate || 'N/A'
      },
      {
        label: 'Pages',
        icon: 'menu_book',
        value: `${this.book.volumeInfo?.pageCount || 'N/A'} pages`
      },
      {
        label: 'Language',
        icon: 'language',
        value: this.book.volumeInfo?.language?.toUpperCase() || 'N/A'
      }
    ];
  }
}
