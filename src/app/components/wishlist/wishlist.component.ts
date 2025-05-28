import { Component } from '@angular/core';
import { ResultsGridComponent } from '../search/results-grid/results-grid.component';
import { BookItem } from '../../models/book.model';
import { SharedService } from '../../services/shared.service';
import { CardType } from '../../models/card-type.model';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [
    ResultsGridComponent
  ],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent {

  // Specify the card type for ResultsGridComponent to render wishlist style cards
  type: CardType = 'wishlist-item';

  // Reference to the shared service's wishlist method which returns an array of BookItem
  wishlist: () => BookItem[];

  constructor(private sharedService: SharedService) {
    // Assign the wishlist method from shared service to this component property
    // This keeps the wishlist reactive if the service method returns updated arrays
    this.wishlist = this.sharedService.wishlist;
  }

}
