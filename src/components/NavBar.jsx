import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      id: 1,
      link: 'Home',
    },
    {
      id: 2,
      link: 'about me',
    },
    {
      id: 3,
      link: 'projects',
    },
    {
      id: 4,
      link: 'reviews',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Lucas Griffin Dev</h1>
      </div>
      <ul className="md:flex hidden">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500s hover:scale-105 duration-200"
          >
            <a href="#" className="text-gray-500 hover:text-gray-700">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {isOpen && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <a href="#" className="text-gray-500 hover:text-gray-700">
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
