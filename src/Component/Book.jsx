import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  return (
    <Link to={`/book-details/${bookId}`}>
      <div className="border border-gray-100 p-6 rounded-2xl space-y-4">
        <div className="flex justify-center bg-gray-100 rounded-2xl py-8">
          <img className="w-[122px] h-[184px]" src={image} alt={bookName} />
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            {tags.map((tag, i) => (
              <p
                key={i}
                className="px-4 py-[7px] bg-green-100 text-[#23BE0A] font-medium rounded-[30px]"
              >
                {tag}
              </p>
            ))}
          </div>
          <h1 className="text-2xl font-bold">{bookName}</h1>
          <p>By: {author}</p>

          <p className="border border-gray-200 border-dashed my-5"></p>

          <div className="flex items-center justify-between">
            <p>{category}</p>
            <div className="flex items-center gap-1">
              <p>{rating}</p>
              <IoMdStarOutline size={20} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
