import { createBrowserRouter } from "react-router";
import MainPage from "../Pages/MainPage";
import Home from "../Pages/Home";
import BookDetails from "../Pages/BookDetails";
import ListedBooks from "../Pages/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("../booksData.json"),
        hydrateFallbackElement: <h1>Loading...</h1>,
      },
      {
        path: "book-details/:bookId",
        Component: BookDetails,
        hydrateFallbackElement: <p>Loading, Please wait...</p>,
        loader: () => fetch("../booksData.json"),
      },
      {
        path: "listed-books",
        Component: ListedBooks,
        hydrateFallbackElement: <p>Loading, Please wait...</p>,
        loader: () => fetch("../booksData.json"),
      },
      {
        path: "pages-to-read",
        element: (
          <h1 className="max-w-7xl mx-auto text-red-600 text-center my-5 text-6xl">
            Not Ready Yet
          </h1>
        ),
      },
      {
        path: "sign-in",
        element: (
          <h1 className="max-w-7xl mx-auto text-red-600 text-center my-5 text-6xl">
            Not Ready Yet
          </h1>
        ),
      },
      {
        path: "sign-up",
        element: (
          <h1 className="max-w-7xl mx-auto text-red-600 text-center my-5 text-6xl">
            Not Ready Yet
          </h1>
        ),
      },
    ],
  },
]);

export { router };
