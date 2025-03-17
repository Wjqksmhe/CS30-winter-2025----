// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myBook;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("cs30 Text","Mr. Scott");
}

function draw() {
  background(220);
}

class Book{
  constructor(title,author,isbn,cover,pages,x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;
  }
}