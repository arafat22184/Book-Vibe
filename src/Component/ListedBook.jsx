import React from "react";
import { Link } from "react-router";
import { IoLocationOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiPagesLine } from "react-icons/ri";

const ListedBook = ({ listBook }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
  } = listBook;
  return (
    <div className="flex items-center gap-6 p-6 rounded-2xl border border-gray-200">
      <div className="py-8 px-[50px] bg-gray-100 rounded-2xl ">
        <img className="h-[172px]" src={image} alt={bookName} />
      </div>

      {/* Details */}
      <div className="space-y-4 w-full">
        <h1 className="text-2xl font-bold">{bookName}</h1>
        <p>By: {author}</p>
        <div className="flex items-center gap-2">
          <span className="font-bold ">Tag</span>
          <div className="flex items-center gap-2">
            {tags.map((tag, i) => (
              <p
                key={i}
                className="px-4 py-[7px] bg-green-100 text-[#23BE0A] font-medium rounded-[30px]"
              >
                #{tag}
              </p>
            ))}
            <IoLocationOutline size={20} />
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>

        {/* Publisher */}
        <div className="flex items-center gap-4 border-b border-gray-200 pb-4 ">
          <div className="flex items-center gap-2">
            <CgProfile size={20} />
            <p>Publisher: {publisher}</p>
          </div>
          <div className="flex items-center gap-2">
            <RiPagesLine size={20} />
            <p>Page {totalPages}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-x-2">
          <button className="rounded-[30px] py-[11px] px-5 bg-blue-100 text-blue-500">
            Category: {category}
          </button>
          <button className="rounded-[30px] py-[11px] px-5 bg-orange-100 text-orange-500">
            Raging: {rating}
          </button>
          <Link
            to={`/book-details/${bookId}`}
            className="rounded-[30px] py-[11px] px-5 bg-green-500 text-white font-black cursor-pointer"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
