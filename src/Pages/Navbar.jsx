import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-green-500 text-white" : ""
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-green-500 text-white" : ""
          }
          to={"/listed-books"}
        >
          Listed Books
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-green-500 text-white" : ""
          }
          to={"/pages-to-read"}
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex items-center py-2 border-b border-x p-1 rounded-b-xl border-gray-200 max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className=" text-xl font-bold">
          Book Vibe
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-green-500 btn text-white" : "btn"
          }
          to={"sign-in"}
        >
          Sign In
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "bg-green-500 btn text-white" : "btn"
          }
          to={"sign-up"}
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
