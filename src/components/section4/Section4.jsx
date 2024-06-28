







import React from "react";
// import gallery from '../../assets/section4/Group 16.png'
import gallery from "../../assets/section2/Group 4.png";

export default function Section4() {
  return (
    <>
      <section className="relative">

      <div className="bg-[#F6F5FB] h-44 w-full absolute lg:top-72 bottom-4 -z-[1] overflow-x-hidden"></div>
        <div className="max-w-[1700px] m-auto">
        <div className="flexContainer flex">
        <div className="left w-[800px] shrink-0">
          <div className="rounded-e-3xl overflow-hidden">
            <div className="header bg-gray-100 flex justify-end items-center gap-2 p-5 ">
              <span className="h-3 w-3  rounded-full bg-[#F96056] "></span>
              <span className="h-3 w-3  rounded-full bg-[#FDBD45] "></span>
              <span className="h-3 w-3  rounded-full bg-[#53E546] "></span>
            </div>
            <div className="body p-6 shadow bg-white">
            <div className="leftImage max-w-[568px] max-h-[550px] w-full overflow-hidden rounded-e-[20px] lg:m-auto">
              <img
                className="h-full w-full object-cover"
                src={gallery}
                alt=""
              />
            </div>
            </div>
          </div>

        </div>

          <div className="flex lg:flex-col-reverse gap-24 relative">
                      <div className="flex flex-col w-full lg:text-center">
              <h2 className="lg:text-4xl text-5xl font-bold my-4 lg:mt-0 lg:mb-7">
                Experiments and personal projects.
              </h2>
              <p className="lg:text-base text-lg">
                Your ceremony & reception venues, your vision, your dress, your
                colours and anything else you would like to share with us. I am
                a Gold Coast and Brisbane.
              </p>

              <div className="mt-auto mb-8">
                <div className="flex justify-around">                 
                  <div className="text-center">
                    <p className="text-5xl font-bold mb-2">55+</p>
                    <p className="text-lg font-medium">Cute Customer</p>
                  </div>
                  <div className="text-center">
                    <p className="text-5xl font-bold mb-2">55+</p>
                    <p className="text-lg font-medium">Cute Customer</p>
                  </div>
                  <div className="text-center">
                    <p className="text-5xl font-bold mb-2">55+</p>
                    <p className="text-lg font-medium">Cute Customer</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
          
        </div>
      </section>
    </>
  );
}
