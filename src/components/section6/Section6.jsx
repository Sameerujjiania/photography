import React, { useEffect, useState } from "react";
import one from "../../assets/section5/section5-1.png";
import two from "../../assets/section6/two.png";
import three from "../../assets/section6/three.png";
import four from "../../assets/section6/four.png";
import data from "../../../data";
import SingleImage from "./SingleImage";

export default function Section6() {
  const [tab, setTab] = useState(1);
  const [page, setPage] = useState(0);
  const [screen, setScreen] = useState(1);
  const [imageNumber, setImageNumber] = useState(window.innerWidth>768?9:8);
  const [width, setWidth] = useState(window.innerWidth);

  if(width!=window.innerWidth){
    setImageNumber(window.innerWidth>1080?9:8)
    console.log(yes)
  }

    // window.innerWidth<1080 ? setImageNumber(8):""

  const pictures = [];

  for (let i = 0; i < imageNumber ; i++ ){
    pictures.push(<SingleImage page = {page} imageNumber = {imageNumber} data = {data} i ={i} />)
  } 
  console.log(pictures)
  return (
    <>
      <section id="photo" className="section6 sectionPadding">
        <div className="container">
          <div className="text mb-20">
            <h2 className="heading text-6xl font-semibold mb-3">
              Our Awesome Works
            </h2>
            <p className="text-2xl">See what we shooted</p>
          </div>

          <div className="tabs flex items-center justify-center gap-4 mb-10">
            <button
              onClick={() => {
                setTab(1);
              }}
              className={`${tab === 1 && "active"} tabButton`}
            >
              Wedding
            </button>
            <button
              onClick={() => {
                setTab(2);
              }}
              className={`${tab === 2 && "active"} tabButton`}
            >
              Birthday
            </button>
            <button
              onClick={() => {
                setTab(3);
              }}
              className={`${tab === 3 && "active"} tabButton`}
            >
              Perawani
            </button>
          </div>
          <div className="image-gallery">
            <div className="grid grid-cols-3  md:grid-cols-2 grid-rows-3 gap-4 w-full lg:aspect-auto aspect-square">

                   
                   {pictures}
              

             
            </div>

            <div className="pagination flex justify-around py-2 px-4 m-auto max-w-96 mt-10">
              <button
                className="cursor-pointer"
                onClick={() => {
                  if (screen > 1) {
                    setScreen(screen - 1);
                    setPage(page - 1);
                  }
                }}
              >
                &laquo;
              </button>

              <button
                className={`cursor-pointer ${
                  page == screen - 1 ? "activePage" : "hover:bg-slate-400"
                } page`}
                onClick={() => {
                  setPage(screen - 1);
                }}
              >
                {screen}
              </button>
              <span
                className={`cursor-pointer ${
                  page == screen ? "activePage" : "hover:bg-slate-400"
                } page`}
                onClick={() => {
                  setPage(screen);
                }}
              >
                {screen + 1}
              </span>
              <span
                className={`cursor-pointer ${
                  page == screen + 1 ? "activePage" : "hover:bg-slate-400"
                } page`}
                onClick={() => {
                  setPage(screen + 1);
                }}
              >
                {screen + 2}
              </span>

              <span
                onClick={() => {
                  setScreen(screen + 1);
                  setPage(page + 1);
                }}
              >
                &raquo;
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}












 
              //  <div className="imagebox lg:h-[300px]  w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
              //   <img
              //     className="w-full h-full object-cover"
              //     src={data[page * 9].images.png}
              //     alt=""
              //   />
              // </div> 
              //  <div className="imagebox lg:h-[300px] w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
              //   <img
              //     className="w-full h-full object-cover"
              //     src={data[page * 9 + 1].images.png}
              //     alt=""
              //   />
              // </div>
              // <div className="imagebox lg:h-[300px]  w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
              //   <img
              //     className="w-full h-full object-cover"
              //     src={data[page * 9 + 2].images.png}
              //     alt=""
              //   />
              // </div>
              // <div className="imagebox lg:h-[300px]  w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
              //   <img
              //     className="w-full h-full object-cover"
              //     src={data[page * 9 + 3].images.png}
              //     alt=""
              //   />
              // </div>
              // <div className="imagebox lg:h-[300px]  w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
              //   <img
              //     className="w-full h-full object-cover"
              //     src={data[page * 9 + 4].images.png}
              //     alt=""
              //   />
              // </div>
              // <div className="imagebox lg:h-[300px]  w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
              //   <img
              //     className="w-full h-full object-cover"
              //     src={data[page * 9 + 5].images.png}
              //     alt=""
              //   />
              // </div>
              // <div className="imagebox lg:h-[300px]  w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
              //   <img
              //     className="w-full h-full object-cover"
              //     src={data[page * 9 + 6].images.png}
              //     alt=""
              //   />
              // </div>
              // <div className="imagebox lg:h-[300px]  w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
              //   <img
              //     className="w-full h-full object-cover"
              //     src={data[page * 9 + 7].images.png}
              //     alt=""
              //   />
              // </div>
              // <div className="imagebox lg:h-[300px]  w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
              //   <img
              //     className="w-full h-full object-cover"
              //     src={data[page * 9 + 8].images.png}
              //     alt=""
              //   />
              // </div> 