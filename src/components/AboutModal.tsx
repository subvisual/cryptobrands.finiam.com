import React, { KeyboardEvent, useEffect, useRef } from "react";
import Head from "next/head";
import FocusTrap from "focus-trap-react";
import AboutInner from "./AboutInner";

export default function AboutModal({ isOpen, onDismiss }) {
  const dismissRef = useRef(null);

  useEffect(() => {
    dismissRef.current?.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  function handleKeyDown(event: KeyboardEvent): void {
    if (event.key === "Escape") onDismiss();
  }

  return (
    <FocusTrap>
      <div
        onKeyDown={handleKeyDown}
        className="fixed top-0 left-0 w-full h-full p-0 m-0 z-50 bg-purple-dark bg-opacity-95 px-5 overflow-scroll"
        aria-label="About page content"
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        <Head>
          <title>About - CryptoBrands by Finiam</title>
        </Head>

        <div className="max-w-xl mx-auto py-12">
          <button
            className="text-tiny text-white cursor-pointer text-opacity-80 mb-10 inline-block hover:text-opacity-100"
            onClick={onDismiss}
            type="button"
            ref={dismissRef}
          >
            ← Back to projects
          </button>

          <AboutInner />
        </div>
      </div>
    </FocusTrap>
  );
}
