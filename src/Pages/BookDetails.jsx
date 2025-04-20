import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addReadData, addWishlistData } from "../Index";

const BookDetails = () => {
  const { bookId } = useParams();
  const booksData = useLoaderData();
  const bookData = booksData.find((book) => book.bookId === parseInt(bookId));

  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = bookData;

  return (
    <div className="max-w-7xl mx-auto flex gap-12 my-14">
      <div className="bg-gray-100 w-full flex justify-center items-center rounded-2xl p-[74px]">
        <img className="w-[425px] h-[564px]" src={image} alt={bookName} />
      </div>

      {/* Details */}
      <div className="max-w-[549px]">
        {/* Titel author */}
        <div className="border-b pb-6 mb-6 border-gray-200">
          <h1 className="text-[40px]">{bookName}</h1>
          <p>By: {author}</p>
        </div>

        <div className="border-b pb-6 mb-6 border-gray-200 text-[20px]">
          <p>{category}</p>
        </div>

        <div className="border-b pb-6 mb-6 border-gray-200">
          <span className="font-bold">Review : </span>
          {review}
          {/* Tag */}
          <div className="flex gap-3 items-center mt-6">
            <span className="font-bold">Tag</span>
            <div className="flex items-center gap-2">
              {tags.map((tag, i) => (
                <p
                  key={i}
                  className="px-4 py-[7px] bg-green-100 text-[#23BE0A] font-medium rounded-[30px]"
                >
                  #{tag}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Descriptionsss */}
        <div className="flex items-center gap-16 mb-8">
          <div className="space-y-3">
            <p>Number of Pages: </p>
            <p>Publisher: </p>
            <p>Year of Publishing: </p>
            <p>Rating: </p>
          </div>
          <div className="font-bold space-y-3">
            <p>{totalPages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => addReadData(bookId)}
          className="cursor-pointer border border-slate-200 font-semibold px-7 py-[18px] mr-4 rounded-[8px]"
        >
          Read
        </button>
        <button
          onClick={() => addWishlistData(bookId)}
          className="cursor-pointer text-white font-semibold bg-[#50B1C9] px-7 py-[18px] rounded-[8px]"
        >
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
