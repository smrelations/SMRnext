import React from "react";
import Image from "next/image";

import {
  FaTiktok,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center px-6 py-16 text-sm text-center text-white bg-black md:px-12 md:text-left">
      
      {/* Logo */}
      <div className="mb-6">
        <Image
          className="w-24 md:w-28"
          src="/images/smr_logo.png"
          alt="Social Media Relations logo"
          width={112} // approximate width in px
          height={112} // approximate height in px
        />
      </div>

      {/* Offices */}
      <div className="flex flex-col justify-center  mb-10 gap-6 md:flex-row md:gap-12 md:justify-center">
        <div className="md:w-1/2">
          <h3 className="font-bold mb-1">
            Social Media Relations
            <br />
            West Coast Office
          </h3>
          <p>
            120 E. 8th St.
            <br />
            Los Angeles, CA 90014
          </p>
        </div>
        <div className="md:w-1/2">
          <h3 className="font-bold mb-1">
            Social Media Relations
            <br />
            East Coast Office
          </h3>
          <p>
            120 Washington St., 2nd Floor
            <br />
            Salem, MA 01970
          </p>
        </div>
      </div>

      {/* Social Links */}
      <div>
        <p className="mb-3 font-semibold">Follow Us</p>
        <div className="flex justify-center gap-6 text-2xl md:justify-start">
          <a
            href="https://www.tiktok.com/@socialmediarelations"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="hover:text-pink-400 transition-colors"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.instagram.com/smrelationsdotcom/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/socialmediarelations"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-400 transition-colors"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.linkedin.com/company/social-media-relations/mycompany/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-300 transition-colors"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com/channel/UCV-nkywYEeQ9_aAvZ4ceHbg"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="hover:text-red-500 transition-colors"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-xs text-gray-400">
        © {new Date().getFullYear()} Social Media Relations. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
