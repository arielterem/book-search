import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BookItem } from '../../../models/book.model';
import { BookDialogService } from '../../../services/book-dialog.service';
import { SharedService } from '../../../services/shared.service';
import { CardType } from '../../../models/card-type.model';

@Component({
  selector: 'app-results-item',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatTooltipModule
  ],
  templateUrl: './results-item.component.html',
  styleUrl: './results-item.component.scss'
})
export class ResultsItemComponent {
  // Input property for the book item to display
  @Input() book!: BookItem;

  // Input to indicate the type of display ('search-item' or 'wishlist-item')
  @Input() type: CardType = 'search-item';

  constructor(
    private bookDialogService: BookDialogService, // Service to open the book details dialog
    private sharedService: SharedService          // Service for managing wishlist actions
  ) {}

  // Open the book details dialog, optionally stopping event propagation
  openDetails(event?: MouseEvent) {
    if (event) event.stopPropagation(); // Prevent event bubbling if triggered by click inside the component
    this.bookDialogService.openBookDialog(this.book);
  }

  // Remove the book from wishlist and stop event propagation
  removeFromWishlist(event: MouseEvent) {
    event.stopPropagation(); // Prevent triggering other click handlers
    this.sharedService.removeFromWishlist(this.book.id);
  }
}
