import React from "react";
import Head from "next/head";
import AboutInner from "./AboutInner";

export default function AboutModal({ onClose }) {
  return (
    <>
      <Head>
        <title>CryptoBrands - About</title>
      </Head>

      <div
        className="w-full h-full fixed overflow-y-auto bg-purple-dark bg-opacity-95 z-50 px-5"
        data-js="about"
        role="dialog"
        aria-label="About this project"
        aria-modal="true"
      >
        <div className="max-w-xl mx-auto py-20">
          <button
            className="text-tiny text-white cursor-pointer text-opacity-80 mb-10 inline-block hover:text-opacity-100"
            onClick={onClose}
            type="button"
          >
            ← Back to projects
          </button>

          <AboutInner />
        </div>
      </div>
    </>
  );
}
