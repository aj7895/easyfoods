import React from "react";

const Testimonial = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col lg:items-center justify-between lg:flex-row">
        <div className="mb-14 xl:mb-0">
          <h1 className="text-2xl leading-tight md:text-4xl xl:text-5xl font-semibold leading-10   text-gray-800 xl:w-2/3 pr-16 lg:pr-0">
            Our customers love what we do
          </h1>
          <p className="mt-4 text-base leading-normal text-gray-600 md:w-2/3 lg:w-3/4 pr-16 lg:pr-0">
            Over 5000 Happy customers, they all what we serve them hear from
            some of them.
          </p>
          <button className="hidden md:block w-full sm:w-auto mt-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-black hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">
            Read success stories
          </button>
        </div>
        <div
          role="list"
          aria-label="Testimonials"
          className="xl:w-1/2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 flex-wrap justify-center items-start"
        >
          <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
            <img src="https://img.icons8.com/material-outlined/24/000000/quote.png" />
            <div className="pl-4 pt-4 flex items-start justify-between">
              <div className="mr-6">
                <p className="xl:text-xl xl:leading-loose text-gray-600">
                  Easyfoods provides great value and fast delivery i loved thier
                  services and food was so tasty
                </p>
                <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                  Anna Smith
                </p>
              </div>
              <img
                src="https://cdn.tuk.dev/assets/components/26May-update/avatar-1.png"
                alt="Display Avatar of Anna Smith"
                role="img"
              />
            </div>
          </div>
          <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
            <img src="https://img.icons8.com/material-outlined/24/000000/quote.png" />
            <div className="pl-4 pt-4 flex items-start justify-between">
              <div className="mr-6">
                <p className="xl:text-xl xl:leading-loose text-gray-600">
                  Easyfoods provides great value and fast delivery i loved thier
                  services and food was so tasty
                </p>
                <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                  Dany John
                </p>
              </div>
              <img
                src="https://cdn.tuk.dev/assets/components/26May-update/avatar-2.png"
                alt="Display avatar of Dany John"
                role="img"
              />
            </div>
          </div>
          <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
            <img src="https://img.icons8.com/material-outlined/24/000000/quote.png" />
            <div className="pl-4 pt-4 flex items-start justify-between">
              <div className="mr-6">
                <p className="xl:text-xl xl:leading-loose text-gray-600">
                  Easyfoods provides great value and fast delivery i loved thier
                  services and food was so tasty
                </p>
                <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                  Mike Blake
                </p>
              </div>
              <img
                src="https://cdn.tuk.dev/assets/components/26May-update/avatar-3.png"
                alt="Display Avatar of Mike Blake"
                role="img"
              />
            </div>
          </div>
          <button className="md:hidden w-full sm:w-auto mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-black hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">
            Read success stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
