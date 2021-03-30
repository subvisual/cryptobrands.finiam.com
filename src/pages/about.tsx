import Head from "next/head";
import Link from "next/link";
import React from "react";
import AboutInner from "../components/AboutInner";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>CryptoBrands - About</title>
      </Head>

      <Link href="/">
        <a className="text-tiny text-white cursor-pointer text-opacity-80 mb-10 inline-block hover:text-opacity-100">
          ← Back to projects
        </a>
      </Link>

      <AboutInner />
    </>
  );
}
