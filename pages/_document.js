import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
       <Head>
        <script
          src="https://kit.fontawesome.com/daf7be8c79.js"
          crossorigin="anonymous" async
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
