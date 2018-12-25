// Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI CLass: Handle UI Tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'JK Rowling',
        isbn: '900012314'
      },
      {
        title: 'Harry Potter and the Prisoner of Azkaban',
        author: 'JK Rowling',
        isbn: '9001213132'
      },
      {
        title: 'Harry Potter and the Order of the Pheonix',
        author: 'JK Rowling',
        isbn: '90021232134'
      }
    ];

    const books = StoredBooks;

    books.forEach(book => {
      UI.addBookToList(book);
    });
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
    `;

    list.appendChild(row);
  }
}

// Store Class: Handles Storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book

//Event: Remove a Book
