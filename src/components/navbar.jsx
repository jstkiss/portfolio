"use client";

import Link from "next/link";

import { useState } from "react";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar z-50  ${showLinks ? "show-nav" : "hide-nav"} `}>
      <div className="navbar_logo"></div>
      <ul className="navbar_links list-none m-0 p-0 flex">
        <li className="navbar_item">
          <Link className="navbar_link" href="#home">
          <span className="text-customgreen">01.</span> Introduction
          </Link>
        </li>
        <li className="navbar_item">
          <Link className="navbar_link" href="#competence">
            <span className="text-customgreen">02.</span> Mes compétences
          </Link>
        </li>
        <li className="navbar_item">
          <Link className="navbar_link" href="#projet">
          <span className="text-customgreen">03.</span> Mes projets
          </Link>
        </li>
        <li className="navbar_item">
          <Link className="navbar_link" href="#contact">
          <span className="text-customgreen">04.</span> Contact
          </Link>
        </li>
      </ul>
      <button
        className="navbar_burger w-10 h-10 bg-transparent border-none text-inherit hidden"
        onClick={handleShowLinks}
      >
        <span className="burger-bar"></span>
      </button>
    </nav>
  );
};

export default Header;
