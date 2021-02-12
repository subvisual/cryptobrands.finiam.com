import React from "react";
import FiniamLogoExt from "../components/FiniamLogoExt";

export default function AboutInner() {
  return (
    <p className="text-white md:text-md md:leading-9 leading-7 max-w-950 text-opacity-80 md:pl-10 font-sans">
      CryptoBrands is a project developed by{" "}
      <a
        href="https://www.finiam.com/"
        target="_blank"
        rel="noopener"
        className="text-green hover:text-opacity-75"
      >
        finiam
      </a>
      . <br />
      <br />
      We know the crypto community is one of the best out there. It’s very
      active and collaborative and we would love to work with you.
      <br />
      <br />
      Based on the principles of human factor, trust, dynamism and graphic
      consistency, we want to build with your help the biggest brand repository
      in the cryptocurrency world.
      <br />
      <br />
      You can make your suggestion directly to{" "}
      <a
        href="mailto:cryptobrands@finiam.com?subject=New%20suggestion"
        className="text-green"
      >
        cryptobrands@finiam.com
      </a>{" "}
      or use{" "}
      <a
        href="https://twitter.com/intent/tweet?text=@wearefiniam%20I%20just%20found%20this%20amazing%20brand%21&hashtags=finiamcryptobrands"
        target="_blank"
        rel="noopener"
        className="text-green"
      >
        #finiamcryptobrands
      </a>{" "}
      on Twitter with the name of the project, the website link and, optionally,
      the design studio responsible for the design.
      <br />
      <br />
      If you want to know in detail the motto behind this project project{" "}
      <a
        href="https://medium.com/finiam/cryptocurrency-brands-need-to-say-hello-more-often-a5c9909fc3d8"
        className="text-green"
      >
        check our blogpost
      </a>
      .
      <br />
      <br />
      –
      <br />
      <br />
      In case you have an incredible idea for improving this repository, your
      feedback is more than welcome! Send us an email to{" "}
      <a
        href="mailto:cryptobrands@finiam.com?subject=I%20have%20a%20suggestion"
        className="text-green"
      >
        cryptobrands@finiam.com
      </a>{" "}
      or create a new ticket in our{" "}
      <a
        href="https://github.com/finiam/cryptobrands.finiam.com/issues"
        target="_blank"
        rel="noopener"
        className="text-green"
      >
        repository
      </a>
      . <br />
      <a className="block mt-20" href="https://www.finiam.com/">
        <FiniamLogoExt />
      </a>
    </p>
  );
}
