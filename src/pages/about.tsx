import React from "react";
import Link from "next/link";
import SEO from "root/components/SEO";
import siteMetadata from "root/common/siteMetadata";
import AboutInner from "root/components/AboutInner";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About - CryptoBrands by Finiam"
        keywords={siteMetadata.keywords}
        image={siteMetadata.image}
      />

      <Link href="/">
        <a className="text-tiny text-white cursor-pointer text-opacity-80 mb-10 inline-block hover:text-opacity-100">
          ← Back to projects
        </a>
      </Link>

      <AboutInner />
    </>
  );
}
