import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        {/* <link href="styles/fontawesome-all.css" rel="stylesheet" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link href="./styles/swiper.css" rel="stylesheet" />
        <link href="./styles/magnific-popup.css" rel="stylesheet" />
        <link href="./styles/styles.css" rel="stylesheet" /> */}
      </Head>
      <body data-spy="scroll" data-target=".fixed-top">
        {/* <Script src="./js/jquery.min.js" strategy="lazyOnload" />
        <Script src="./js/jquery.easing.min.js" strategy="lazyOnload" />
        <Script src="./js/swiper.min.js" strategy="lazyOnload" />
        <Script src="./js/jquery.magnific-popup.js" strategy="lazyOnload" />
        <Script src="./js/scripts.js" strategy="lazyOnload" />
        <Script src="./js/test.js" strategy="lazyOnload" /> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
