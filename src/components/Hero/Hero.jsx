import React from "react";

import hero1 from "../../assets/hero/hero1.png";
import hero2 from "../../assets/hero/hero2.png";
import hero3 from "../../assets/hero/hero3.png";

function Hero() {
  return (
    <>
      <section className="py-40 lg:pt-28 lg:pb-24">
        <div className="container">
          <div className="grid grid-cols-12">
            <div className="col-span-5 lg:col-span-12 lg:text-center lg:mb-10">
              <h1 className=" sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] text-8xl font-bold sm:leading-[56px] lg:leading-[96px]  leading-[108px] mb-10">
                Where creative process happens
              </h1>
              <p className=" text-lg  mb-10">
                Your creativity, our inspiration Whatever your story, set if
                free.
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
            <div className="col-span-7 lg:col-span-12">
              <div className="imagesContainer max-w-[680px] md:max-w-[100%] ms-auto lg:m-auto">
                <div className=" imageBox1 sm:mb-4 mb-5  w-full h-[400px] md:max-h-[360px]  sm:max-h-[260px]   overflow-hidden rounded-3xl">
                  <img
                    className="h-full w-full object-cover"
                    src={
                      "https://imgeng.jagran.com/images/2023/sep/best%20nikon%20cameras%20for%20photography%20ci1694172900406.jpg"
                    }
                    alt="heroOneImage"
                  />
                </div>
                <div className=" imageBox2 flex sm:gap-4 gap-6 h-[250px] md:max-h-[200px] sm:max-h-[160px]">
                  <div className="leftImageBox overflow-hidden rounded-3xl max-w-[280px] w-full h-full ">
                    <img
                      className="h-full w-full object-cover"
                      src={"https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D"}
                      alt="heroOneImage"
                    />
                  </div>
                  <div className="rightImageBox overflow-hidden rounded-3xl max-w-[380px] w-full h-full ">
                    <img
                      className="h-full w-full object-cover"
                      src={"https://papershootcamera.com/cdn/shop/collections/Paper_Shoot_Camera_April_2024_Shoot_Hi-Res-4-WillCrooks.jpg?v=1715956752"}
                      alt="heroOneImage"
                    />
                  </div>
                </div>
              </div>
            </div>




            {/* <div className="col-span-7 lg:col-span-12">
              <div className="imagesContainer max-w-[680px] ms-auto lg:m-auto">
                <div className=" imageBox1 sm:mb-4 mb-5  w-full max-h-[400px] h-full overflow-hidden rounded-3xl">
                  <img
                    className="h-full w-full object-cover"
                    src={
                      "https://imgeng.jagran.com/images/2023/sep/best%20nikon%20cameras%20for%20photography%20ci1694172900406.jpg"
                    }
                    alt="heroOneImage"
                  />
                </div>
                <div className="imageBox2 flex sm:gap-4 gap-6 max-h-[250px]">
                  <div className="leftImageBox overflow-hidden rounded-3xl max-w-[280px] w-full h-full">
                    <img
                      className="h-full w-full object-cover"
                      src={"https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D"}
                      alt="heroOneImage"
                    />
                  </div>
                  <div className="rightImageBox overflow-hidden rounded-3xl max-w-[380px] w-full h-full ">
                    <img
                      className="h-full w-full object-cover"
                      src={"https://papershootcamera.com/cdn/shop/collections/Paper_Shoot_Camera_April_2024_Shoot_Hi-Res-4-WillCrooks.jpg?v=1715956752"}
                      alt="heroOneImage"
                    />
                  </div>
                </div>
              </div>
            </div> */}




          </div>

          {/* <div className=' max-w-md md:max-w-full lg:min-w-[540px] grid grid-cols-2 grid-rows-5 gap-2 sm:gap-4 mx-auto'>
        <div className='col-span-2 row-span-3 rounded-2xl h-full overflow-hidden'><img className='h-full'  src="https://eavf3cou74b.exactdn.com/wp-content/uploads/2023/06/28103020/Best-Cameras-for-Professional-Photography-6.jpg?strip=all&lossy=1&ssl=1" alt="" /></div>
        <div  className='rounded-2xl row-span-3 h-full overflow-hidden'><img className='h-full w-full'  src="https://editors.dexerto.com/wp-content/uploads/2023/05/16/monkey-d-luffy-one-piece.jpeg" alt="" /></div>
        <div  className='rounded-2xl row-span-3 h-ful overflow-hidden'><img className='h-full w-full' src="https://eavf3cou74b.exactdn.com/wp-content/uploads/2023/06/28103020/Best-Cameras-for-Professional-Photography-6.jpg?strip=all&lossy=1&ssl=1" alt="" /></div>
        </div> */}
        </div>
      </section>
    </>
  );
}

export default Hero;
