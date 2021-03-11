import Head from "next/head";
import Navbar from "../components/Navbar";
import "@reach/dialog/styles.css";
import "../styles/index.css";

const METADATA = {
  lang: "en",
  title: "CryptoBrands – by Finiam",
  description:
    "CryptoBrands is a project developed by finiam that intends to compile, from the design point of view, and with the help of the community, the best cryptocurrency brands out there.",
  keywords:
    "crypto, cryptocurrency, branding, design, identity, blockchain, community, wearefiniam, repository, human, people",
  siteUrl: "https://cryptobrands.finiam.com",
  image: "/images/site_image.png",
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{METADATA.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <meta name="description" content={METADATA.description} />
        <meta name="keywords" content={METADATA.keywords} />

        <meta content={METADATA.title} property="og:title" />
        <meta content={METADATA.description} property="og:description" />
        <meta content={METADATA.image} property="og:image" />

        <meta content={METADATA.title} property="twitter:title" />
        <meta content={METADATA.description} property="twitter:description" />
        <meta content={METADATA.image} property="twitter:image" />

        <meta content={METADATA.title} property="twitter:title" />
        <meta content={METADATA.description} property="twitter:description" />
        <meta content={METADATA.image} property="twitter:image" />

        <meta property="og:type" content="website" />

        <meta content="summary_large_image" name="twitter:card" />
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
