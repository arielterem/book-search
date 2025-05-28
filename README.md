# 📚 Book Search App

A simple Angular web application that allows users to search for books using the Google Books API and manage a personal wishlist.

## 🔍 Features

### 1. Welcome Screen
- Prompts the user to enter a **username** (cannot be empty).
- On valid input, the user is redirected to the **Search** page.
- The username is remembered for the session.

### 2. Search Page
- Displays a greeting with the entered username at the top.
- Includes a **real-time search bar** that triggers searches as the user types.
- Fetches **up to 20 results** from the Google Books API.
- Displays results in a **paginated grid**.
- Clicking a result opens a **dialog** with:
  - More book details (title, author, description, image, link).
  - An option to **add the book to the Wishlist**.

### 3. Wishlist Page
- Displays all saved Wishlist items.
- Allows users to **remove books** from their Wishlist.

## 🚀 Technologies Used

- **Angular 17+**
- **Angular Material**
- **RxJS** for real-time search
- **Google Books API**
- **Standalone Components & Signals**

## ▶️ Getting Started

Run the app locally with:
```bash
ng serve
