import { useState } from 'react';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 flex justify-between items-center p-4 bg-[#E0E0E0] shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src="/images/logos/krab_bez_rak.webp" alt="Krab Logo" className="h-10 w-auto" />
        <h1 className="text-2xl font-extrabold text-[#1C1C1C]">Kraby bez Rąk</h1>
      </div>

      {/* Burger Button for small screens */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden flex flex-col space-y-1.5 w-8 h-6 justify-center items-center"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`block h-0.5 w-full bg-[#1C1C1C] rounded transition-transform duration-300 ${
            isOpen ? 'rotate-45 translate-y-2.5' : ''
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-[#1C1C1C] rounded transition-opacity duration-300 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-[#1C1C1C] rounded transition-transform duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2.5' : ''
          }`}
        />
      </button>

      {/* Menu items */}
      <div
        className={`flex items-center space-x-4 transition-all duration-300 sm:static sm:flex ${
          isOpen ? 'absolute top-full left-0 w-full bg-[#E0E0E0] p-4 flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4' : 'hidden sm:flex'
        }`}
        style={{ zIndex: 10 }}
      >
        <a
          href="https://www.instagram.com/kbr.gamestudios/"
          target="_blank"
          aria-label="Instagram"
          className="hover:opacity-70"
          onClick={() => setIsOpen(false)}
        >
          <img src="/images/logos/social/instagram.svg" alt="Instagram" className="h-6 w-6" />
        </a>

        <a
          href="https://github.com/S3ri0usGuy/Kraby-bez-rak-the-gra"
          target="_blank"
          aria-label="GitHub"
          className="hover:opacity-70"
          onClick={() => setIsOpen(false)}
        >
          <img src="/images/logos/social/github.svg" alt="GitHub" className="h-6 w-6" />
        </a>

        <a
          href="https://github.com/S3ri0usGuy/Kraby-bez-rak-the-gra/releases/tag/beta-v1.1"
          target="_blank"
          className="bg-[#D4AF37] hover:bg-yellow-500 text-black px-4 py-1 rounded font-semibold transition"
          onClick={() => setIsOpen(false)}
        >
          Pobierz Betę
        </a>
      </div>
    </nav>
  );
}
