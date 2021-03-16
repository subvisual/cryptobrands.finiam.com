import React from "react";
import Head from "next/head";
import Dialog from "@reach/dialog";
import AboutInner from "./AboutInner";

export default function AboutModal({ isOpen, onDismiss }) {
  return (
    <Dialog
      onDismiss={onDismiss}
      isOpen={isOpen}
      className="fixed top-0 left-0 w-full h-full p-0 m-0 z-50 bg-purple-dark bg-opacity-95"
      aria-label="About page content"
    >
      <Head>
        <title>CryptoBrands - About</title>
      </Head>

      <div className="max-w-xl mx-auto py-20">
        <button
          className="text-tiny text-white cursor-pointer text-opacity-80 mb-10 inline-block hover:text-opacity-100"
          onClick={onDismiss}
          type="button"
        >
          ← Back to projects
        </button>

        <AboutInner />
      </div>
    </Dialog>
  );
}
