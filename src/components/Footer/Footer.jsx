import boya from '../../assets/footer/boya.png'

export default function Footer() {
  return (
    <>
      <footer  className="footer mt-8">
        <div className=" CONTAINER px-8 max-w-[1360px] w-full m-auto ">
        <div className="Footer-element bg-[#431898] relative h-[400px] rounded-t-[88px] ">
          <div className="flex  h-full pl-16 pr-4 ">
            <div className="footer-text mt-auto mb-5">
              <h2 className="text-6xl bold text-white mb-8">Get Started With Us</h2>
              <p className='mb-9 text-lg'>
                Your ceremony & reception venues, yourvision, your dress, your
                colours and anythingelse you would like to share with us.{" "}
              </p>
              <a href="" className="py-4 w-max px-8 bg-white text-lg text-white font-medium rounded-full flex items-center gap-2">
                <span className='text-black'>Get in touch</span>
                <span className="h-6 w-6 rounded-full bg-[#00000069] flex items-center justify-center">
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
                            
            <div>
            <img className='relative scale-[1.30] -top-8 left-10' src={boya} alt="" />
            </div>
           
          </div>
        </div>
        </div>
      </footer>
    </>
  );
}
