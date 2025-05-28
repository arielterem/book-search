import { Injectable, signal } from '@angular/core';
import { BookItem } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // Username signal, exposed as readonly
  private _username = signal<string>('');
  username = this._username.asReadonly();

  // Set username value
  setUsername(username: string): void {
    this._username.set(username);
  }

  // Wishlist signal, exposed as readonly
  private _wishlist = signal<BookItem[]>([]);
  wishlist = this._wishlist.asReadonly();

  // Check if book is in wishlist
  isInWishlist(id: string): boolean {
    return this._wishlist().some(book => book.id === id);
  }

  // Add book to wishlist if not already added
  addToWishlist(book: BookItem): void {
    if (!this._wishlist().some(b => b.id === book.id)) {
      this._wishlist.update(books => [...books, book]);
    }
  }

  // Remove book from wishlist
  removeFromWishlist(bookId: string): void {
    this._wishlist.update(books => books.filter(b => b.id !== bookId));
  }
}
