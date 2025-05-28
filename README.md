# 📚 Book Search App

A simple Angular 19 web application that allows users to search for books using the Google Books API and manage a personal wishlist.

---

## 🔍 Features

### 🚪 Welcome Screen
- Prompts the user to enter a **username** (required).
- On valid input, redirects to the **Search** page.
- Username is remembered during the session.

### 🔎 Search Page
- Greets the user by name.
- Features a **live search bar** with results fetched as the user types.
- Retrieves up to **20 book results** from the Google Books API.
- Displays results in a **responsive grid layout** with optional pagination.
- Clicking a book opens a **modal dialog** showing:
  - Title, author, description, cover image, and external link.
  - Option to **add the book to your ❤️ Wishlist**.

### ❤️ Wishlist Page
- Shows all books added to the Wishlist.
- Allows removal of books from the list.

---

## 🛠️ Technologies Used

- **Angular 19** (Standalone components & Signals)
- **Angular Material**
- **RxJS** (for reactive search behavior)
- **Google Books API**

---

## ▶️ Getting Started

### Prerequisites
Make sure you have Angular CLI installed:

```bash
npm install -g @angular/cli
```

### Installation & Running Locally

1. Clone the repository:
```bash
git clone https://github.com/your-username/book-search-app.git
cd book-search-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and go to:
```
http://localhost:4200
```

---

## 📬 Contact

**Ariel Terem**  
📧 [arielterem@gmail.com](mailto:arielterem@gmail.com)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
