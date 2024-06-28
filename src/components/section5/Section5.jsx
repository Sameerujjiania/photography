import React from "react";

import one from "../../assets/section5/section5-1.png";
import two from "../../assets/section5/section5-2.png";
import three from "../../assets/section5/section5-3.png";

export default function Section5() {
  return (
    <>
      <section className="sectionPadding">
        <div className="container">
          <div className="grid grid-cols-8 grid-rows-6 max-h-[1080px]">
            <div class="col-start-1 row-start-1 col-span-4 row-span-2">
              <h2 className="text-5xl font-bold mb-8">
                Floral Design in a event planning company
              </h2>
              <p className="text-lg mb-9">
                Your ceremony & reception venues, your vision, your dress, your
                colours and anything else you would like to share with us. I am
                a Gold Coast and Brisbane.
              </p>
              <a href="" className="themeButton lg:m-auto">
                <span>Get in touch</span>
                <span className="arrow">
                  <svg
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L2.5 2.5L7 7L1 13" stroke="white" />
                  </svg>
                </span>
              </a>
            </div>

            <div className="col-start-7 row-start-2 col-span-2 row-span-3 ">
              <div className="image-box max-w-[300px] max-h-[400px] h-full w-full overflow-hidden rounded-[20px]">
                <img
                  className="h-full w-full object-cover"
                  src={three}
                  alt=""
                />
              </div>
              <p className="text-5xl bold mt-5">03<span className="text-lg">/18</span></p>
            </div>
            <div className="col-start-1 row-start-4 row-span-3 col-span-2 ">
              <div className="image-box max-w-[300px] max-h-[400px] h-full w-full overflow-hidden rounded-[20px]">
                <img className="h-full w-full object-cover" src={two} alt="" />
              </div>
              <p className="text-5xl bold mt-5">02<span className="text-lg">/18</span></p>
            </div>
            <div className="col-start-4 row-start-3 row-span-3 col-span-2">
              <div className="image-box max-w-[300px] max-h-[400px] h-full w-full overflow-hidden rounded-[20px]">
                <img className="h-full w-full object-cover" src={one} alt="" />
              </div>
              <p className="text-5xl bold mt-5">01<span className="text-lg">/18</span></p>
            </div>

            <div className="flex items-center gap-4 status-bar p-10 rounded-2xl border-2 border-gray-300 col-span-3 col-end-9 -row-start-2 self-end max-h-20">
                <div className="w-[80%] border-2 border-gray-400"></div>
                <span> {"Next >"} </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
