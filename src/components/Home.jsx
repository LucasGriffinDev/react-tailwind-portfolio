import React from 'react';
import headshot from '../assets/portfolio/headshot.jpg';
import { FaArrowRight } from 'react-icons/fa';

export const Home = () => {
  return (
    <div
      name="home"
      className="flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-500 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a Frontend Developer with a passion for creating beautiful,
            responsive, and intuitive user experiences. I have a background in
            both frontend and backend development, and I am currently working on
            my portfolio. Currently I like to code in JavaScript, React, and,
            tailwind, Next Js and GraphQL.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={20} className="ml-2" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={headshot}
            alt="headshot"
            className="rounded-2xl mx-5 w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
