
import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const SocialLinks = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a
        href="https://www.facebook.com/natangesang"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        aria-label="Facebook"
      >
        <Facebook size={20} />
      </a>
      <a
        href="https://www.instagram.com/natangesangarg"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
        aria-label="Instagram"
      >
        <Instagram size={20} />
      </a>
      <a
        href="https://www.youtube.com/@NatanGesangArg"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
        aria-label="YouTube"
      >
        <Youtube size={20} />
      </a>
      <a
        href="https://www.linkedin.com/company/natan-gesang/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
        aria-label="LinkedIn"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
      <a
        href="https://www.tiktok.com/@natangesangarg?lang=es"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
        aria-label="TikTok"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.321 5.562a5.122 5.122 0 0 1-.443-.258 6.228 6.228 0 0 1-1.138-.862c-.438-.516-.743-1.097-.914-1.733h3.073V0h-4.426v16.038c-.011 1.837-1.496 3.32-3.32 3.32-1.837 0-3.33-1.495-3.33-3.33s1.493-3.32 3.33-3.32c.347 0 .677.054.99.153V9.368a7.7 7.7 0 0 0-.99-.131c-4.268 0-7.725 3.457-7.725 7.725s3.457 7.725 7.725 7.725 7.725-3.457 7.725-7.725V8.837a10.678 10.678 0 0 0 6.065 1.888V6.299a6.307 6.307 0 0 1-1.622-.737z"/>
        </svg>
      </a>
    </div>
  );
};

export default SocialLinks;
