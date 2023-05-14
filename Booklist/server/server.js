const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const app = express();

let books = [];
fs.readFile("books.json", "utf-8", (err, data) => {
  if (err) throw err;
  books = JSON.parse(data);
});

app.use(bodyParser.json());
app.use(cors());

app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const book = books.find((book) => book.id == id);
  console.log(book);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: "Book not found" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length, title, author };
  books.push(newBook);
  fs.writeFile("books.json", JSON.stringify(books), (err) => {
    if (err) throw err;
    res.sendStatus(201);
  });
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
