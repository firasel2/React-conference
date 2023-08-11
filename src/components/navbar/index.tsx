'use client';

import React, { useState } from 'react';
import { INavbar } from './interface';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = ({ logo, routes }: INavbar) => {
  const [isShow, setIsShow] = useState(true);

  return (
    <nav className="container">
      <div className="flex items-center justify-between gap-16 pt-8 pb-1 md:py-10 relative">
        <div className="w-16 md:w-24 xl:w-32 h-auto">
          <Image
            className="w-full h-auto"
            width={117}
            height={32}
            src={logo.url}
            alt={logo.alt}
          />
        </div>
        <div
          data-state={isShow}
          className="absolute md:relative top-full right-0 w-fit p-2 md:p-0 rounded shadow-1 md:shadow-transparent scale-0 data-[state=true]:scale-100 origin-top-right md:scale-100 transition-all duration-300"
        >
          <ul className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center md:gap-[1rem] lg:gap-[2.5rem] xl:gap-[3.12rem]">
            {routes.map((item, index) => (
              <li key={index} className="flex items-center w-full">
                <Link
                  href={item.route}
                  className="text-base md:text-lg font-medium text-black whitespace-nowrap w-full py-2 pl-2 pr-4 hover:bg-gray-thin md:bg-transparent md:hover:bg-transparent rounded md:rounded-none md:p-0 md:px-1 lg:px-2 transition-all duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-16 md:w-24 xl:w-32 flex items-center justify-end">
          <button
            onClick={() => setIsShow((prevValue) => !prevValue)}
            className="w-6 h-4 flex flex-col justify-between overflow-hidden"
          >
            <span className="w-full h-[2.2px] bg-black rounded" />
            <span className="w-full h-[2.2px] bg-black rounded" />
            <span className="w-full h-[2.2px] bg-black rounded" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
