import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body data-spy="scroll" data-target=".fixed-top">
        <script src="./js/jquery.min.js"></script>
        <script src="./js/jquery.easing.min.js"></script>
        <script src="./js/swiper.min.js"></script>
        <script src="./js/jquery.magnific-popup.js"></script>
        <script src="./js/scripts.js"></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
