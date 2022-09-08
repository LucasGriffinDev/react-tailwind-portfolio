import React from 'react';

import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { GrGraphQl } from 'react-icons/gr';
import { VscGithub } from 'react-icons/vsc';
import { SiTailwindcss } from 'react-icons/si';
import { AiOutlineConsoleSql } from 'react-icons/ai';

export const Technologies = () => {
  const techs = [
    {
      id: 1,
      style: 'shadow-orange-500',
      child: (
        <>
          <AiFillHtml5 size={45} className="mx-auto text-orange-500" />
        </>
      ),
      name: 'HTML',
    },
    {
      id: 2,
      style: 'shadow-blue-500',
      child: (
        <>
          <DiCss3 size={45} className="mx-auto text-blue-500" />
        </>
      ),
      name: 'css',
    },
    {
      id: 3,
      style: 'shadow-yellow-500',
      child: (
        <>
          <TbBrandJavascript size={45} className="mx-auto text-yellow-500" />
        </>
      ),
      name: 'Javascript',
    },
    {
      id: 4,
      style: 'shadow-blue-600',
      child: (
        <>
          <FaReact size={45} className="mx-auto text-blue-600" />
        </>
      ),
      name: 'React',
    },
    {
      id: 5,
      style: 'shadow-white',
      child: (
        <>
          <TbBrandNextjs size={45} className="mx-auto text-white" />
        </>
      ),
      name: 'NextJS',
    },
    {
      id: 6,
      style: 'shadow-pink-400',
      child: (
        <>
          <GrGraphQl size={45} className="mx-auto text-pink-400" />
        </>
      ),
      name: 'GraphQL',
    },
    {
      id: 7,
      style: 'shadow-gray-400',
      child: (
        <>
          <VscGithub size={45} className="mx-auto text-gray-400" />
        </>
      ),
      name: 'Github',
    },
    {
      id: 8,
      style: 'shadow-orange-500',
      child: (
        <>
          <SiTailwindcss size={45} className="mx-auto text-orange-500" />
        </>
      ),
      name: 'TailwindCSS',
    },
    {
      id: 9,
      style: 'shadow-blue-800',
      child: (
        <>
          <AiOutlineConsoleSql size={45} className="mx-auto text-blue-800" />
        </>
      ),
      name: 'MySQL',
    },
  ];
  return (
    <div
      name="technologies"
      className="bg-gradient-to-b from-gray-800 to-black w-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technologies
          </p>
          <p className="py-6">These are the technologies I've worked with:</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-6 px-12 sm:px-0">
          {techs.map(({ id, child, name, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              {child}
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
