import React from 'react'
import Title from './title'

export default function index() {
  return (
    <>
       <header
        id="header"
        className="text-center header py-28 md:pt-36 lg:text-left xl:pt-44 xl:pb-32"
      >
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <Title />
          <div className="xl:text-right">
            <img
              className="inline"
              src="images/imagehero.svg"
              alt="alternative"
            />
          </div>
        </div>
      </header>
    </>
  )
}
