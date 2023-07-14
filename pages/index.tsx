import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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

      <header
        id="header"
        className="text-center header py-28 md:pt-36 lg:text-left xl:pt-44 xl:pb-32"
      >
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
            <h1 className="mb-5 h1-large">Team management mobile application</h1>
            <p className="mb-8 p-large">
              Start getting things done together with your team based on Pavo's
              revolutionary team management features
            </p>
            <a className="btn-solid-lg" href="#your-link"
            ><i className="fab fa-apple"></i>Download</a
            >
            <a className="btn-solid-lg secondary" href="#your-link"
            ><i className="fab fa-google-play"></i>Download</a
            >
          </div>
          <div className="xl:text-right">
            <img
              className="inline"
              src="images/header-smartphone.png"
              alt="alternative"
            />
          </div>
        </div>
      </header>

      <div id="features" className="cards-1">
        <h2 className="mb-5">Book Category</h2>
        <div className="container px-4 sm:px-8 xl:px-4">
          <div className="card">
            <div className="card-image">
              <img src="images/logo.png" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Comic</h5>
              <p className="mb-4">
                You sales force can use the app on any smartphone platform without
                compatibility issues
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="images/logo.png" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Comic</h5>
              <p className="mb-4">
                You sales force can use the app on any smartphone platform without
                compatibility issues
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="images/logo.png" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Comic</h5>
              <p className="mb-4">
                You sales force can use the app on any smartphone platform without
                compatibility issues
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="images/logo.png" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Comic</h5>
              <p className="mb-4">
                You sales force can use the app on any smartphone platform without
                compatibility issues
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="images/logo.png" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Comic</h5>
              <p className="mb-4">
                You sales force can use the app on any smartphone platform without
                compatibility issues
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-image">
              <img src="images/logo.png" alt="alternative" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Comic</h5>
              <p className="mb-4">
                You sales force can use the app on any smartphone platform without
                compatibility issues
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 pb-24 slider-1 bg-gray">
        <div className="container px-4 sm:px-8">
          <div className="flex justify-between">
            <h5 className="mb-24 lg:max-w-xl lg:text-4xl">
              Koleksi
            </h5>
            <a href="allbook.html" className="text-xl lg:text-3xl hover:text-pink-500">Lihat Semua</a>
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
                      <h5 className="overflow-hidden overflow-ellipsis whitespace-nowrap">Negeri Para Bedebah</h5>
                      <p className="">Tere Liye</p>
                      <p className="overflow-hidden overflow-ellipsis whitespace-nowrap p-small">
                        Kisah berawal dari Thomas sebagai seorang konsultan keuangan
                        yang sangat terkenal. Keahlian Thomas dalam bidang
                        pekerjaannya ini membuat dirinya bahkan sering diundang
                        menjadi pembicara dalam berbagai kesempatan seperti talk show
                        dan seminar hingga luar negeri. Thomas bisa dibilang merupakan
                        salah satu figure paling berpengaruh dalam bidang perekonomian
                        hingga mampu mendirikan firma konsultannya bernama Thomas &
                        Co. Ketenaran Thomas membuat banyak orang ingin mengulik sisi
                        dari dirinya yang amat misterius dan latar belakangnya yang
                        gelap.
                      </p>
                      <span className="rating-more">
                        <img className="rating" src="/svg/star5.svg" alt="Rating" />
                        <a className="more" href="books/book1.html"
                        >Selengkapnya</a
                        >
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
                      <h5 className="overflow-hidden overflow-ellipsis whitespace-nowrap">Rumah adalah di Mana Pun</h5>
                      <p className="">Adinto F. Susanto</p>
                      <p className="overflow-hidden overflow-ellipsis whitespace-nowrap p-small">
                        Perempuan penyuka traveling adalah mereka yang sangat mandiri dan tangguh. Tempat-tempat yang didatangi biasanya anti-mainstream dan banyak mengandung cerita sejarah sebagai latarnya. Buku ini menyajikan kisah perjalanan 19 pejalan (traveler) perempuan yang telah melanglang buana ke seluruh penjuru negeri. Mereka berbagi rindu dan cerita cinta tentang tempat-tempat keren di Indonesia, yang mempunyai aroma "rumah" serta keeksotisan alam raya di dalamnya. Mulai dari catatan perjalanan Mehdia Nailufar bersantai di Kota Sabang, wisata mistis Citra Novitasari di Tana Toraja, serta 17 jurnal petualang wanita lainnya yang dikemas dengan gaya bahasa khas "cewek banget".
                      </p>
                      <span className="rating-more">
                        <img className="rating" src="/svg/star4.svg" alt="Rating" />
                        <a className="more" href="books/book1.html"
                        >Selengkapnya</a
                        >
                      </span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="relative mx-16 mb-4 overflow-hidden bg-white shadow-md md:mx-0 card rounded-xl">
                    <a href="#">
                      <img
                        className="m-auto mt-8 mb-4 overflow-hidden card-image w-36 h-44"
                        src="/images/dongeng asal usul binatang.png"
                        alt="picturebook"
                      />
                    </a>
                    <div className="px-4 text-left">
                      <h5 className="overflow-hidden overflow-ellipsis whitespace-nowrap">Dongeng asal-usul binatang</h5>
                      <p className="">Ade Cahya Satria</p>
                      <p className="overflow-hidden overflow-ellipsis whitespace-nowrap p-small">
                        Buku ini menceritakan tentang dongeng asal usul binatang, tentang bagaimana kucing selalu menjilati telapak kakinya, mengapa kelelawar keluar di malam hari, bagaimana gajah mendapatkan belalainya, mengapa lalat selalu mengganggu sapi, bagaimana burung pipit mendapatkan warna yang indah, mengapa petani takut dengan beruang, bagaimana ayam jago mendapat kan jenggernya.
                      </p>
                      <span className="rating-more">
                        <img className="rating" src="/svg/star5.svg" alt="Rating" />
                        <a className="more" href="books/book1.html"
                        >Selengkapnya</a
                        >
                      </span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="relative mx-16 mb-4 overflow-hidden bg-white shadow-md md:mx-0 card rounded-xl">
                    <a href="#">
                      <img
                        className="m-auto mt-8 mb-4 overflow-hidden card-image w-36 h-44"
                        src="/images/dark ofmoon.png"
                        alt="picturebook"
                      />
                    </a>
                    <div className="px-4 text-left">
                      <h5 className="overflow-hidden overflow-ellipsis whitespace-nowrap">Dark of the Moon : sebuah novel Dark Guardian</h5>
                      <p className="">Rachel Hawthorne</p>
                      <p className="overflow-hidden overflow-ellipsis whitespace-nowrap p-small">
                        Cerita pada novel ini berpusat pada Brittany yang ingin membuktikan dirinya pada Dark Guardians. Namun, saat waktu pertamanya berubah wujud, ia tidak merasakan apa-apa. Ia tahu Connor yang dicintainya tak akan membalas cintanya apabila ia tak dapat berubah wujud. Brittany begitu ingin berubah menjadi serigala hingga ia sanggup melakukan segalanya, meskipun itu membahayakan kawanan dark guardian.
                      </p>
                      <span className="rating-more">
                        <img className="rating" src="/svg/star4.5.svg" alt="Rating" />
                        <a className="more" href="books/book1.html"
                        >Selengkapnya</a
                        >
                      </span>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="relative mx-16 mb-4 overflow-hidden bg-white shadow-md md:mx-0 card rounded-xl">
                    <a href="#">
                      <img
                        className="m-auto mt-8 mb-4 overflow-hidden card-image w-36 h-44"
                        src="/images/mahabarata.png"
                        alt="picturebook"
                      />
                    </a>
                    <div className="px-4 text-left">
                      <h5 className="overflow-hidden overflow-ellipsis whitespace-nowrap">Kitab Epos Mahabharata</h5>
                      <p className="">C. Rajagopalachari</p>
                      <p className="overflow-hidden overflow-ellipsis whitespace-nowrap p-small">
                        Mahabharata lebih sekedar sebuah epik, melainkan roman, yang menceritakan kisah laki-laki dan perempuan heroik serta beberapa tokoh yang luar biasa. Karya ini adalah seni sastra yang mengandung rahasia hidup, filsafat relasi sosial dan etik, serta pemikiran penting tentang masalah-masalah manusia yang sulit dicari padanannya. Dalam epos kuno yang luar biasa dari tanah India ini, kita dapat menemukan kisah-kisah yang ilustratif dan ajaran-ajaran luhur, di samping kisah perjalanan hidup kelima Pandawa.
                      </p>
                      <span className="rating-more">
                        <img className="rating" src="/svg/star5.svg" alt="Rating" />
                        <a className="more" href="books/book1.html"
                        >Selengkapnya</a
                        >
                      </span>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="relative mx-16 mb-4 overflow-hidden bg-white shadow-md md:mx-0 card rounded-xl">
                    <a href="#">
                      <img
                        className="m-auto mt-8 mb-4 overflow-hidden card-image w-36 h-44"
                        src="/images/the best of me.png"
                        alt="picturebook"
                      />
                    </a>
                    <div className="px-4 text-left">
                      <h5 className="overflow-hidden overflow-ellipsis whitespace-nowrap">The Best Of Me</h5>
                      <p className="">Nicholas Sparks</p>
                      <p className="overflow-hidden overflow-ellipsis whitespace-nowrap p-small">
                        The best of me adalah kisah menyentuh tentang sepasang anak SMU di kota kecil. Sekarang, mereka telah dewasa dan mengambil jalan yang berbeda. Namun tak satupun dari mereka yang dapat melupakan cinta pertama itu. Pada suatu hari mereka kembali ke kampung halaman dan dipaksa untuk menghadapi pilihan yang telah mereka buat.
                      </p>
                      <span className="rating-more">
                        <img className="rating" src="/svg/star5.svg" alt="Rating" />
                        <a className="more" href="books/book1.html"
                        >Selengkapnya</a
                        >
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

      <div id="pricing" className="cards-2">
        <div className="absolute bottom-0 w-full h-40 bg-white"></div>
        <div className="container px-4 pb-px sm:px-8">
          <h2 className="mb-2.5 text-white lg:max-w-xl lg:mx-auto">
            Pricing subscribe options
          </h2>
          <p className="mb-16 text-white lg:max-w-3xl lg:mx-auto">
            Our pricing plans are setup in such a way that any user can start
            enjoying Pavo without worrying so much about costs. They are flexible
            and work for any type of industry
          </p>

          <div className="card">
            <div className="card-body">
              <div className="card-title">STANDARD</div>
              <div className="price">
                <span className="currency">Rp</span><span className="value">2.000</span>
              </div>
              <div className="frequency">monthly</div>
              <p>
                This basic package covers the marketing needs of small startups
              </p>
              <ul className="space-y-2 text-left list mb-7">
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>List building and relations</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Seamless platform integration</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Great performance on devices</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Community support and videos</div>
                </li>
              </ul>
              <div className="button-wrapper">
                <a className="btn-solid-reg page-scroll" href="#download">Subsribe</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-title">STANDARD</div>
              <div className="price">
                <span className="currency">Rp</span><span className="value">2.000</span>
              </div>
              <div className="frequency">monthly</div>
              <p>
                This basic package covers the marketing needs of small startups
              </p>
              <ul className="space-y-2 text-left list mb-7">
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>List building and relations</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Seamless platform integration</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Great performance on devices</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Community support and videos</div>
                </li>
              </ul>
              <div className="button-wrapper">
                <a className="btn-solid-reg page-scroll" href="#download">Subsribe</a>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-title">STANDARD</div>
              <div className="price">
                <span className="currency">Rp</span><span className="value">2.000</span>
              </div>
              <div className="frequency">monthly</div>
              <p>
                This basic package covers the marketing needs of small startups
              </p>
              <ul className="space-y-2 text-left list mb-7">
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>List building and relations</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Seamless platform integration</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Great performance on devices</div>
                </li>
                <li className="flex">
                  <i className="fas fa-chevron-right"></i>
                  <div>Community support and videos</div>
                </li>
              </ul>
              <div className="button-wrapper">
                <a className="btn-solid-reg page-scroll" href="#download">Subsribe</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container px-4 sm:px-8">
          <h4 className="mb-8 lg:max-w-3xl lg:mx-auto">
            Pavo is a mobile application for marketing automation and you can
            reach the team at
            <a
              className="text-indigo-600 hover:text-gray-500"
              href="mailto:email@domain.com"
            >email@domain.com</a
            >
          </h4>
          <div className="social-container">
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-facebook-f fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-twitter fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-pinterest-p fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-instagram fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-youtube fa-stack-1x"></i>
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-3">
          <ul className="mb-4 list-unstyled p-small">
            <li className="mb-2"><a href="article.html">Article Details</a></li>
            <li className="mb-2"><a href="terms.html">Terms & Conditions</a></li>
            <li className="mb-2"><a href="privacy.html">Privacy Policy</a></li>
          </ul>
          <p className="pb-2 p-small statement">
            Copyright © <a href="#your-link" className="no-underline">Your name</a>
          </p>

          <p className="pb-2 p-small statement">
            Distributed by :<a href="https://themewagon.com/" className="no-underline"
            >Themewagon</a
            >
          </p>
        </div>

      </div>
    </>
  )
}
