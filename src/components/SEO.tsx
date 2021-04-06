import Head from "next/head";
import React from "react";

type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
};

export default function SEO({ title, description, keywords, image }: SEOProps) {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {title && <meta content={title} property="og:title" />}
      {description && <meta content={description} property="og:description" />}
      {image && <meta content={image} property="og:image" />}

      {title && <meta content={title} property="twitter:title" />}
      {description && (
        <meta content={description} property="twitter:description" />
      )}
      {image && <meta content={image} property="twitter:image" />}

      {title && <meta content={title} property="twitter:title" />}
      {description && (
        <meta content={description} property="twitter:description" />
      )}
      {image && <meta content={image} property="twitter:image" />}
    </Head>
  );
}
