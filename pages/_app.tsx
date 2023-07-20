// import "@/styles/styles.css";
// import "@/styles/swiper.css";
// import "@/styles/magnific-popup.css";
import "@/styles/globals.css";
// import "@/styles/fontawesome-all.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pavo Webpage Title</title>
        {/* 
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link href="styles/fontawesome-all.css" rel="stylesheet" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link href="../styles/swiper.css" rel="stylesheet" />
        <link href="../styles/magnific-popup.css" rel="stylesheet" />
        <link href="../styles/styles.css" rel="stylesheet" /> */}

        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
