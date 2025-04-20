import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getReadData, getWishlistData } from "../Index";
import ListedBook from "../Component/ListedBook";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router";
import WishListBook from "../Component/WishListBook";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");
  const [tabHandle, setTabHandle] = useState("read");

  const booksData = useLoaderData();

  useEffect(() => {
    const storedBookData = getReadData();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadlist = booksData.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadlist);
  }, [booksData]);

  useEffect(() => {
    const storedBookData = getWishlistData();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadlist = booksData.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setWishList(myReadlist);
  }, [booksData]);

  const handleSort = (type) => {
    setSort(type);

    if (type === "pages") {
      const sortedPage = [...readList].sort(
        (a, b) => b.totalPages - a.totalPages
      );

      tabHandle === "read" && setReadList(sortedPage);
      tabHandle === "wishlist" && setWishList(sortedPage);
    }

    if (type === "rating") {
      const sortedPage = [...readList].sort((a, b) => b.rating - a.rating);
      tabHandle === "read" && setReadList(sortedPage);
      tabHandle === "wishlist" && setWishList(sortedPage);
    }

    if (type === "year") {
      const sortedPage = [...readList].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      tabHandle === "read" && setReadList(sortedPage);
      tabHandle === "wishlist" && setWishList(sortedPage);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="bg-gray-100 py-8 text-3xl font-bold text-center my-9 rounded-2xl">
        Books
      </h1>

      <div className="text-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="bg-green-500 px-5 py-[14px] rounded-[8px] text-white flex items-center gap-2"
          >
            <p>Sort By {sort ? sort : ""}</p> <IoIosArrowDown size={20} />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("rating")}>Rating</a>
            </li>
            <li onClick={() => handleSort("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => handleSort("year")}>
              <a>Year</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Tabs>
          <TabList>
            <Tab onClick={() => setTabHandle("read")}>Read Books</Tab>
            <Tab onClick={() => setTabHandle("wishlist")}>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <div className="space-y-7 ">
              {readList.map((listBook) => (
                <ListedBook
                  key={listBook.bookId}
                  listBook={listBook}
                ></ListedBook>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="space-y-7 ">
              {wishList.map((wishListBook) => (
                <WishListBook
                  key={wishListBook.bookId}
                  wishListBook={wishListBook}
                ></WishListBook>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
