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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          dolorum debitis, rem quas quaerat neque nisi similique sit. Cum totam
          sed nihil atque beatae voluptates amet nesciunt quis rem. Cupiditate
          voluptates id harum totam impedit rem mollitia veniam iste.
          Dignissimos sapiente repellendus quisquam inventore error libero
          eligendi nisi cumque ratione?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          accusantium praesentium repellat libero aspernatur voluptatibus alias
          deleniti magnam totam veniam accusamus nobis rerum commodi deserunt
          ducimus officia fugit eligendi distinctio modi sequi facere, hic
          reprehenderit tempora harum. Optio dolores harum voluptatum rem.
          Excepturi recusandae quisquam velit illum nihil inventore corporis?
        </p>
      </div>
    </div>
  );
};

export default About;
