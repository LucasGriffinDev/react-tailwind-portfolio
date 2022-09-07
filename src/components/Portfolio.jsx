import React from 'react';
import notesApp from '../assets/portfolio/notesApp.PNG';
import passwordApp from '../assets/portfolio/passwordApp.PNG';
import quizApp from '../assets/portfolio/quizApp.PNG';
import weatherApp from '../assets/portfolio/weatherApp.PNG';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: 'Notes App',
      description: 'A simple note taking app',
      codeLink: 'https://github.com/LucasGriffinDev/react-notes-app',
      liveLink: 'https://lucasgriffindev.github.io/react-notes-app/',
      image: notesApp,
    },
    {
      id: 2,
      title: 'Password Generator',
      description: 'A password generator',
      codeLink: 'https://github.com/LucasGriffinDev/random-password-generator',
      liveLink: 'https://lucasgriffindev.github.io/random-password-generator/',
      image: passwordApp,
    },
    {
      id: 3,
      title: 'Quiz App',
      description: 'A quiz app',
      codeLink: 'https://github.com/LucasGriffinDev/react-quiz-app-ts',
      liveLink: 'https://lucasgriffindev.github.io/react-quiz-app-ts/',
      image: quizApp,
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'A weather app',
      codeLink: 'https://github.com/LucasGriffinDev/weather-app',
      liveLink: 'https://lucasgriffindev.github.io/weather-app/',
      image: weatherApp,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(
            ({ id, title, description, codeLink, liveLink, image }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg justify-center items-center flex flex-col"
              >
                <p className="text-2xl border-b-4 border-gray-500">{title}</p>
                <p>{description}</p>
                <img
                  src={image}
                  alt=""
                  className="h-48 object-contain  rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => window.open(liveLink, '_blank')}
                    className="w-1/2 px-6 py-3 md-4 duration-200 hover:scale-110"
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => window.open(codeLink, '_blank')}
                    className="w-1/2 px-6 py-3 md-4 duration-200 hover:scale-110"
                  >
                    Code
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
