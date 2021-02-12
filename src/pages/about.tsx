import Head from "next/head";
import React from "react";
import AboutInner from "../components/AboutInner";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>CryptoBrands - About</title>
      </Head>

      <AboutInner />
    </>
  );
}
