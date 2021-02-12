import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import FiniamLogo from "./FiniamLogo";
import AboutModal from "./AboutModal";

export default function Navbar() {
  const router = useRouter();
  const [aboutOpen, setAboutOpen] = useState(false);

  function openModal(event) {
    event.preventDefault();
    document.body.classList.toggle("overflow-hidden", true);
    setAboutOpen(true);
  }

  function closeModal() {
    document.body.classList.toggle("overflow-hidden", false);
    setAboutOpen(false);
  }

  return (
    <>
      <nav className="w-full fixed border-b border-white border-opacity-25 py-4 px-5 bg-purple-dark z-10">
        <div className="max-w-xl mx-auto">
          <div className="w-full flex items-center">
            <div className="flex items-center flex-grow">
              <a
                className="w-4 h-auto rounded-sm mr-6"
                href="https://www.finiam.com/"
                aria-label="Finiam's short logo"
              >
                <FiniamLogo />
              </a>
              <Link href="/">
                <a className="text-white text-base hidden md:block">
                  CryptoBrands
                </a>
              </Link>
            </div>

            {router.pathname !== "/about" && (
              <button onClick={openModal} type="button">
                <a
                  href="/about"
                  className="text-white text-opacity-50 text-tiny hover:text-opacity-100 mr-5 cursor-pointer"
                >
                  About
                </a>
              </button>
            )}

            <a
              href="mailto:cryptobrands@finiam.com?subject=New%20suggestion"
              className="text-green text-tiny hover:text-opacity-75"
            >
              Send your suggestion
            </a>
          </div>
        </div>
      </nav>

      {aboutOpen && <AboutModal onClose={closeModal} />}
    </>
  );
}
