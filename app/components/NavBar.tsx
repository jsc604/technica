'use client'

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "../../assets/images/technicaLogo.png";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <section className="bg-black border-b border-sky-500">
      <nav className="w-5/6 flex items-center justify-center md:justify-between mx-auto text-center py-2">
        <div className="w-1/6">
          <Link href="#">
            <Image src={logo} height={494} width={1475} alt="logo" layout="responsive"/>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex uppercase">
            <li className="pl-7"><Link className="hover:text-sky-500" href="/detailing">Detailing</Link></li>
            <li className="pl-7"><Link className="hover:text-sky-500" href="#">Products & Community</Link></li>
            <li className="pl-7"><Link className="hover:text-sky-500" href="/about">About</Link></li>
            <li className="pl-7"><Link className="hover:text-sky-500" href="/about">Contact</Link></li>
            <li className="pl-7"><Link href="/book" className="border border-white rounded-md py-0 px-3 hover:bg-white hover:text-black">Book</Link></li>
          </ul>
        </div>
        {!sidebarVisible && (
          <span className="md:hidden ml-auto flex cursor-pointer" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} size='xl' />
          </span>
        )}

        {sidebarVisible && (
          <div className="fixed top-0 right-0 w-full bg-black text-white shadow-md shadow-gray-800 z-50 p-5 flex">
            <span className="absolute top-5 right-10 cursor-pointer" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faTimes} size="xl" />
            </span>
            <ul className="mt-4 text-start">
              <li className="mb-4" onClick={toggleSidebar}><Link href="/">Home</Link></li>
              <li className="mb-4" onClick={toggleSidebar}><Link href="/detailing">Detailing</Link></li>
              <li className="mb-4" onClick={toggleSidebar}><Link href="#">Ceramic Coating</Link></li>
              <li className="mb-4" onClick={toggleSidebar}><Link href="#">Products & Gear</Link></li>
              <li className="mb-4" onClick={toggleSidebar}><Link href="/about">About</Link></li>
              <li className="mb-4" onClick={toggleSidebar}><Link href="/book">Book</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </section>
  )
};

export default Navbar;