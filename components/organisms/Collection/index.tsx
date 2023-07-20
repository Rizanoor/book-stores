import React from 'react'

export default function index() {
  return (
    <>
      <div className="pt-4 pb-24 slider-1 bg-gray">
        <div className="container px-4 sm:px-8">
          <div className="flex justify-between">
            <h5 className="mb-24 lg:max-w-xl lg:text-4xl">Koleksi</h5>
            <a
              href="allbook.html"
              className="text-xl lg:text-3xl hover:text-pink-500"
            >
              Lihat Semua
            </a>
          </div>

          <div className="slider-container">
            <div className="swiper-container card-slider">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="relative mx-16 mb-4 overflow-hidden bg-white shadow-md md:mx-0 card rounded-xl">
                    <a href="#">
                      <img
                        className="m-auto mt-8 mb-4 overflow-hidden card-image w-36 h-44"
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
                        Kisah berawal dari Thomas sebagai seorang konsultan
                        keuangan yang sangat terkenal. Keahlian Thomas dalam
                        bidang pekerjaannya ini membuat dirinya bahkan sering
                        diundang menjadi pembicara dalam berbagai kesempatan
                        seperti talk show dan seminar hingga luar negeri. Thomas
                        bisa dibilang merupakan salah satu figure paling
                        berpengaruh dalam bidang perekonomian hingga mampu
                        mendirikan firma konsultannya bernama Thomas & Co.
                        Ketenaran Thomas membuat banyak orang ingin mengulik
                        sisi dari dirinya yang amat misterius dan latar
                        belakangnya yang gelap.
                      </p>
                      <span className="rating-more">
                        <img
                          className="rating"
                          src="/svg/star5.svg"
                          alt="Rating"
                        />
                        <a className="more" href="books/book1.html">
                          Selengkapnya
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="relative mx-16 mb-4 overflow-hidden bg-white shadow-md md:mx-0 card rounded-xl">
                    <a href="#">
                      <img
                        className="m-auto mt-8 mb-4 overflow-hidden card-image w-36 h-44"
                        src="/images/rumahadadimana.png"
                        alt="picturebook"
                      />
                    </a>
                    <div className="px-4 text-left">
                      <h5 className="overflow-hidden overflow-ellipsis whitespace-nowrap">
                        Rumah adalah di Mana Pun
                      </h5>
                      <p className="">Adinto F. Susanto</p>
                      <p className="overflow-hidden overflow-ellipsis whitespace-nowrap p-small">
                        Perempuan penyuka traveling adalah mereka yang sangat
                        mandiri dan tangguh. Tempat-tempat yang didatangi
                        biasanya anti-mainstream dan banyak mengandung cerita
                        sejarah sebagai latarnya. Buku ini menyajikan kisah
                        perjalanan 19 pejalan (traveler) perempuan yang telah
                        melanglang buana ke seluruh penjuru negeri. Mereka
                        berbagi rindu dan cerita cinta tentang tempat-tempat
                        keren di Indonesia, yang mempunyai aroma "rumah" serta
                        keeksotisan alam raya di dalamnya. Mulai dari catatan
                        perjalanan Mehdia Nailufar bersantai di Kota Sabang,
                        wisata mistis Citra Novitasari di Tana Toraja, serta 17
                        jurnal petualang wanita lainnya yang dikemas dengan gaya
                        bahasa khas "cewek banget".
                      </p>
                      <span className="rating-more">
                        <img
                          className="rating"
                          src="/svg/star4.svg"
                          alt="Rating"
                        />
                        <a className="more" href="books/book1.html">
                          Selengkapnya
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
