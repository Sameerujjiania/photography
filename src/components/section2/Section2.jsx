import React from "react";
import group4 from "../../assets/section2/Group 4.png";

export default function Section2() {
  return (
    <>
      <section className="">
        <div className="container">
          <div className="flex lg:flex-col-reverse items-center gap-24">
            <div className="imagebox w-full max-w-[489px] max-h-[459px] h-full  sm:rounded-xl md:rounded-2xl rounded-3xl overflow-hidden m-auto">
              <img className=" object-cover w-full h-full" src={group4} alt="" />
            </div>
            <div className="mister-text flex flex-col  lg:text-center">
              <p className="font-semibold text-xl text-primary mb-1">GET TO KNOW US</p>
              <h2 className="text-5xl font-bold text-secondary leading-[64px] mb-5">Why we make it happens</h2>
              <p className="text-lg text-ter mb-10">
                Your ceremony & reception venues, your vision, your dress, your
                colours and anything else you would like.
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
          </div>
        </div>
      </section>
    </>
  );
}
