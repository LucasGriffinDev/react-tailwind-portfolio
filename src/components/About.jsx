import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full max-h-screen bg-gradient-to-b from-gray-800 to to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I am a Frontend developer with a passion for building web apps and a
          love for learning new technologies. I have a background in both design
          and development.
        </p>
        <br />
        <p className="text-xl">
          I have a passion for building web apps and a love for learning new
          technologies. My hobbies include boldering and looking after my 2 year
          old whippet.
        </p>
      </div>
    </div>
  );
};

export default About;
