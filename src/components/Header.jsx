import React from "react";

export default function Header() {
  return (
    <>
      <header className="fixed z-50 bg-gray-100 w-full py-4 shadow  ">
        <div className="container">
          <div className="headerDetails flex items-center justify-between">
            <p className="text-4xl md:text-2xl">ZOKA</p>
            <nav className="sm:hidden  block">
              <ul className="space-x-8 flex">
                <li>
                  <a href="#Hero" className="navLinks">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="navLinks">
                    Pages
                  </a>
                </li>
                <li>
                  <a href="#photo" className="navLinks">
                    Photograpy
                  </a>
                </li>
                <li>
                  <a href="" className="navLinks">
                    Photoshoots
                  </a>
                </li>
              </ul>
            </nav>
            <a href="" className="sm:hidden flex gap-2 items-center rounded-2xl border-2 border-[color:var(--primary)] text-primary font-medium text-lg px-4 md:px-3 py-2 md:py-1  ">
              Instagram

              <span>
                
<svg className="stroke-[color:var(--primary)] " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3H12Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 8.5C17.8284 8.5 18.5 7.82843 18.5 7C18.5 6.17157 17.8284 5.5 17 5.5C16.1716 5.5 15.5 6.17157 15.5 7C15.5 7.82843 16.1716 8.5 17 8.5Z" />
</svg>

              </span>
            </a>
            <span className="text-4xl hidden sm:block">≡</span>
          </div>
        </div>
      </header>

      

      {/*
      <section className='flex flex-col-reverse md:flex-row gap-8 md:gap-16 xl:gap-28 max-w-screen-2xl m-auto px-10 md:px-18 lg:px-32 md:py-24 mb-24'>

        <div className='aspect-square rounded-2xl md:rounded-3xl overflow-hidden max-w-md lg:max-w-xl  mx-auto'>
        <img className='h-full ' src="https://editors.dexerto.com/wp-content/uploads/2023/05/16/monkey-d-luffy-one-piece.jpeg" alt="" />      
        </div>
        
     
        <div className='flex flex-col gap-10 my-auto max-w-md mx-auto'>
          <p>GET TO KNOW US</p>
         <h2 className='text-4xl lg:text-[3rem] xl:text-7xl  w-[90%]'>Why we make it happens</h2>
         <p className='w-[60%]'>Your ceremony & reception venues, your vision, your dress, your colours and anything else you would like.</p>
         <button className='h-10 md:h-14 bg-blue-700 px-6 md:px-9  rounded-full text-center mr-auto'>Get in touch</button>
        </div>
      </section>

      <section className='my-24 flex flex-col max-w-screen-2xl m-auto px-10 md:px-18 lg:px-32'>

        <span className='mx-auto text-4xl md:text-5xl xl:text-6xl font-bold'>Why Choose us</span>

        <div className='flex-col gap-y-11 md:flex-row flex justify-around w-[90%] lg:w-[80%] mx-auto mt-28'>
            <article className='flex flex-col gap-10 items-center text-center' >
                <div className='w-28 h-28 rounded-full bg-slate-500'></div>
                <div>
                <h3 className='mb-2 text-lg font-bold'>Professional editing</h3>
                <p>Your creativity our inspiration. <br />Whate ever your want</p>
                </div>
            </article>

            <article className='flex flex-col gap-10 items-center text-center'>
                <div className='w-28 h-28 rounded-full bg-slate-500'></div>
                <div>
                <h3 className='mb-2 text-lg font-bold'>Long hour shoots</h3>
                <p>Your creativity our inspiration. <br />Whate ever your want</p>
                </div>
            </article>

            <article className='flex flex-col gap-10 items-center text-center'>
                <div className='w-28 h-28 rounded-full bg-slate-500'></div>
                <div>
                <h3 className='mb-2 text-lg font-bold'>Extensive equipment</h3>
                <p>Your creativity our inspiration. <br /> Whate ever your want</p>
                </div>
            </article>
        </div>

      </section> */}
    </>
  );
}
