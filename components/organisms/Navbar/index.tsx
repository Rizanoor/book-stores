import React from 'react'

export default function index() {
  return (
    <>
      <nav className="navbar fixed-top">
        <div
          className="container flex flex-wrap items-center justify-between sm:px-4 lg:px-8 lg:flex-nowrap"
        >
          <a
            className="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline"
            href="index.html"
          >
            <img src="images/logo.svg" alt="alternative" className="h-8" />
          </a>

          <button
            className="text-xl leading-none rounded background-transparent hover:no-underline focus:no-underline lg:hidden lg:text-gray-400"
            type="button"
            data-toggle="offcanvas"
          >
            <span
              className="inline-block w-8 h-8 align-middle navbar-toggler-icon"
            ></span>
          </button>

          <div
            className="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center"
            id="navbarsExampleDefault"
          >
            <ul
              className="flex flex-col pl-0 mt-3 mb-2 ml-auto list-none lg:mt-0 lg:mb-0 lg:flex-row"
            >
              <li>
                <a className="nav-link page-scroll active" href="#header"
                >Home <span className="sr-only">(current)</span></a
                >
              </li>
              <li>
                <a className="nav-link page-scroll" href="#features">Category</a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="./profile.html">Profile</a>
              </li>
            </ul>
            <span className="sm:ml-3">
              <a
                href="/signin.html"
                type="button"
                className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Stared
              </a>
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}
