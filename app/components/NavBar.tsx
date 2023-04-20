'use client'

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "../../assets/images/technicaLogo.png";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="shadow-lg">
      <nav className="w-5/6 flex items-center py-5 justify-center md:justify-between mx-auto text-center">
        <div className="w-1/6">
          <Link href="#">
            <Image src={logo} height={494} width={1475} alt="logo" layout="responsive"/>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex uppercase">
            <li className="pl-7 hover:text-amber-500"><Link href="/detailing">Detailing</Link></li>
            <li className="pl-7 hover:text-amber-500"><Link href="#">Ceramic Coating</Link></li>
            <li className="pl-7 hover:text-amber-500"><Link href="#">Get a quote</Link></li>
            <li className="pl-7 hover:text-amber-500"><Link href="#">Products & Gear</Link></li>
            <li className="pl-7 hover:text-amber-500"><Link href="/about">About</Link></li>
          </ul>
        </div>
        {!sidebarVisible && (
          <span className="md:hidden ml-auto flex cursor-pointer" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} size='xl' />
          </span>
        )}

        {sidebarVisible && (
          <div className="fixed top-0 right-0 w-full bg-black text-white shadow-md-white z-50 p-5 flex">
            <span className="absolute top-5 right-10 cursor-pointer" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faTimes} size="xl" />
            </span>
            <ul className="mx-auto mt-4 text-center">
              <li className="mb-4"><Link href="/detailing">Detailing</Link></li>
              <li className="mb-4"><Link href="#">Ceramic Coating</Link></li>
              <li className="mb-4"><Link href="#">Get a quote</Link></li>
              <li className="mb-4"><Link href="#">Products & Gear</Link></li>
              <li className="mb-4"><Link href="/about">About</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  )
};

export default Navbar;