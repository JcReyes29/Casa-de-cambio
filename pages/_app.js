import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp