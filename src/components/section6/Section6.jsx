import React, { useState } from "react";
import one from "../../assets/section5/section5-1.png";
import two from "../../assets/section6/two.png";
import three from "../../assets/section6/three.png";
import four from "../../assets/section6/four.png";

export default function Section6() {

  const [tab,setTab] = useState(1)
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
            <button onClick={()=>{
              setTab(1)
            }} className={`${tab===1 && 'active'} tabButton`}>Wedding</button>
            <button onClick={()=>{
              setTab(2)
            }} className={`${tab===2 && 'active'} tabButton`}>Birthday</button>
            <button onClick={()=>{
              setTab(3)
            }} className={`${tab===3 && 'active'} tabButton`}>Perawani</button>
          </div>
          <div className="image-gallery">
              <div className="grid grid-cols-3  md:grid-cols-2 grid-rows-3 gap-4 w-full lg:aspect-auto aspect-square"> 
                <div className="imagebox1 lg:h-[300px] w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
                  <img className = "w-full h-full object-cover" src={one} alt="" />
                </div>
                <div className="imagebox1 lg:h-[300px]  w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
                  <img className = "w-full h-full object-cover" src={two} alt="" />
                </div>
                <div className="imagebox1 lg:h-[300px]  w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
                  <img className = "w-full h-full object-cover" src={three} alt="" />
                </div>
                <div className="imagebox1 lg:h-[300px]  w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
                  <img className = "w-full h-full object-cover" src={four} alt="" />
                </div>
                <div className="imagebox1 lg:h-[300px]  w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
                  <img className = "w-full h-full object-cover" src={two} alt="" />
                </div>
                <div className="imagebox1 lg:h-[300px]  w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
                  <img className = "w-full h-full object-cover" src={four} alt="" />
                </div>
                <div className="imagebox1 lg:h-[300px]  w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
                  <img className = "w-full h-full object-cover" src={one} alt="" />
                </div>
                <div className="imagebox1 lg:h-[300px]  w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
                  <img className = "w-full h-full object-cover" src={one} alt="" />
                </div>
                <div className="imagebox1 lg:h-[300px]  w-full h-full rounded-[50px] md:h-[220px] sm:h-[180px] lg:rounded-3xl overflow-hidden">
                  <img className = "w-full h-full object-cover" src={one} alt="" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
