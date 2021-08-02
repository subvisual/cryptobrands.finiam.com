import Head from "next/head";
import Navbar from "root/components/Navbar";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>CryptoBrands – by Finiam</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />

        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />

        <link
          rel="preload"
          href="/fonts/subset-StudioFeixenSansRg_Finiam.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/subset-StudioFeixenSansMd_Finiam.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/subset-StudioFeixenSans-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>

      <div className="min-h-screen bg-purple-dark">
        <Navbar />

        <main className="px-5 py-20">
          <div className="max-w-xl mx-auto">
            <Component {...pageProps} />
          </div>
        </main>
      </div>
    </>
  );
}
