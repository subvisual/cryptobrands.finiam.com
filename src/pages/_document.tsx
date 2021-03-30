import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import siteMetadata from "root/common/siteMetadata";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <React.StrictMode>
        <Html lang={siteMetadata.lang}>
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </React.StrictMode>
    );
  }
}

export default MyDocument;
