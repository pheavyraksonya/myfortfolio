import React from "react";
import { Facebook, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0b0d1b] text-gray-300 py-6 mt-10 border-t border-[#6c4ccf]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Sean Pheavyraksonya. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/share/1Cj8SqP3nW/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
            aria-label="Facebook"
          >
            <Facebook size={30} />
          </a>
          <a
            href="https://www.instagram.com/phean0u?igsh=MW5ucG11enI4cmtkNA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
            aria-label="Instagram"
          >
            <Instagram size={30} />
          </a>
          <a
            href="https://github.com/pheavyraksonya"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
            aria-label="GitHub"
          >
            <Github size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
