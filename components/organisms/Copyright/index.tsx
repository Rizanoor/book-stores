import React from 'react'

export default function index() {
  return (
    <>
       <div className="copyright">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-3">
          <ul className="mb-4 list-unstyled p-small">
            <li className="mb-2">
              <a href="article.html">Article Details</a>
            </li>
            <li className="mb-2">
              <a href="terms.html">Terms & Conditions</a>
            </li>
            <li className="mb-2">
              <a href="privacy.html">Privacy Policy</a>
            </li>
          </ul>
          <p className="pb-2 p-small statement">
            Copyright ©{" "}
            <a href="#your-link" className="no-underline">
              Your name
            </a>
          </p>

          <p className="pb-2 p-small statement">
            Distributed by :
            <a href="https://themewagon.com/" className="no-underline">
              Themewagon
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
