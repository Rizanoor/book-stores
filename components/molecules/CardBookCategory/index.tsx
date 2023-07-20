import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <>
      <div className="relative overflow-hidden bg-white shadow-md rounded-xl">
        <a href="#">
          <img
            className="m-auto mt-8 mb-4 overflow-hidden w-36 h-44"
            src="/images/negeriparabedebah.png"
            alt="picturebook"
          />
        </a>
        <div className="px-4 text-left">
          <h5 className="overflow-hidden overflow-ellipsis whitespace-nowrap">
            Negeri Para Bedebah
          </h5>
          <p className="">Tere Liye</p>
          <p className="overflow-hidden overflow-ellipsis whitespace-nowrap p-small">
            Kisah berawal dari Thomas sebagai seorang konsultan keuangan
            yang sangat terkenal. Keahlian Thomas dalam bidang pekerjaannya
            ini membuat dirinya bahkan sering diundang menjadi pembicara
            dalam berbagai kesempatan seperti talk show dan seminar hingga
            luar negeri. Thomas bisa dibilang merupakan salah satu figure
            paling berpengaruh dalam bidang perekonomian hingga mampu
            mendirikan firma konsultannya bernama Thomas & Co. Ketenaran
            Thomas membuat banyak orang ingin mengulik sisi dari dirinya
            yang amat misterius dan latar belakangnya yang gelap.
          </p>
          <span className="rating-more">
            <img className="rating" src="/svg/star5.svg" alt="Rating" />
            <Link className="more" href="/details">
              Selengkapnya
            </Link>
          </span>
        </div>
      </div>
    </>
  )
}
