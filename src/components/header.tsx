"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/projetos", label: "Projetos" },
    { href: "/clientes", label: "Clientes" },
  ];

  return (
    <header className="relative w-full bg-gradient-to-r bg-[#0F1117] text-white shadow-md rounded-b-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          
          <Image src="/assets/logoRW.svg" alt="LogoRw" width={30} height={40} className="rounded-full" />
        
        </div>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg font-medium transition-colors hover:text-gray-200 ${
                pathname === link.href ? "underline underline-offset-4" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* AÇÕES (desktop) + botão hambúrguer (mobile) */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <Link href="/login" className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#5626c5] transition hover:bg-gray-100">
              Contato
            </Link>
          </div>

          {/* Hamburger button - visible only on mobile (posicionado à direita, centralizado verticalmente) */}
          <button
            className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-md bg-[#0F1117]/70 hover:bg-[#4520a5]/80 focus:outline-none focus:ring-2 focus:ring-white z-50"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU dentro do header/nav */}
      {mobileOpen && (
        <div id="mobile-menu" className="md:hidden w-full px-6 pb-4">
          <nav className="flex flex-col items-center gap-4 py-4 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium text-white ${pathname === link.href ? "underline underline-offset-2" : ""}`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-600"
            >
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
