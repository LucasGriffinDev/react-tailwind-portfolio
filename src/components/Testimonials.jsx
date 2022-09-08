import React from 'react';
import { MdPersonPinCircle } from 'react-icons/md';

export const Testimonials = () => {
  const customers = [
    {
      id: 1,
      name: 'S B',
      quote:
        'Your phenomenal team members Lucas Griffin Who is the pinnacle of who you achieve to become , who individually goes far far beyond every dream you could ever dream to achieve, every goal you prayed to achieve, and every expectation you could ever hope to achieve !!! Your team member Lucas Griffin supersedes not only you as a collective corporation goals but has him self as a person !!! We would also like to single out and acknowledge with honorable Support of Mohammad Mia and Gayani Wastu for their exemplary kind and phenomenal customer service !!!',
      location: 'Ibis World Square',
      reviewSite: '(Tripadvidor)',
      icon: (
        <>
          <MdPersonPinCircle size={30} />
        </>
      ),
    },
    {
      id: 2,
      name: 'CountryCorporate',
      quote:
        'Lucas was just the best on reception. Couldn’t have been more charming, welcoming, professional, or helpful. Hang onto that guy and promote him! Customer service like that is hard to come by.',
      reviewSite: '(Tripadvidor)',
      icon: (
        <>
          <MdPersonPinCircle size={30} />
        </>
      ),
    },
    {
      id: 3,
      name: 'Supernova',
      quote:
        'We where served by Lucas (legendary Lucas) he was a pure delight and instantly picked up our mood after a long day in the city. Not just the service but showed a genuine interest in the well being of his fellow man. Thankyou. ',
      reviewSite: '(Google Reviews)',
      icon: (
        <>
          <MdPersonPinCircle size={30} />
        </>
      ),
    },
  ];
  return (
    <div name="testimonials">
      <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Testimonials
            </p>
            <p className="py-6">Here are some of my customers:</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="shadow-md shadow-gray-600 rounded-lg justify-center items-center flex flex-col"
              >
                <div className="flex flex-col justify-center items-center p-4">
                  <div className="flex justify-center items-center">
                    {customer.icon}
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold inline">{customer.name}</p>
                    <p className="text-sm">{customer.location}</p>
                    <p className="text-sm">{customer.reviewSite}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="">{customer.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
