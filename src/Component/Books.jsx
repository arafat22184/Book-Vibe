import React from "react";
import { useLoaderData } from "react-router";
import Book from "./Book";

const Books = () => {
  const booksData = useLoaderData();
  return (
    <div>
      <h1 className="text-[40px] font-bold text-center mt-20">Books</h1>
      <div className="grid grid-cols-3 gap-6">
        {booksData.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
