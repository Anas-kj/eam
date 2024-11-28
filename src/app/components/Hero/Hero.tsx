"use client";
import Wave from './Wave';

const Hero = () => {

  return (
    <section className="bg-gradient-to-b from-white to-[#0da3b0] ">
      <div className="flex flex-col justify-center items-start text-start px-6 py-12 m-16 font-bricolage">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl m-4 md:m-8 lg:m-12 space-y-2">
          <span className="block">SAFEGUARDING OUR PLANET</span>
          <span className="block">THROUGH SUSTAINABLE ACTION FOR </span>
          <div className="flex flex-col md:flex-row items-center">
            <span>A LASTING FUTURE</span>
            <span className="lg:ml-4 flex flex-col text-gray-500 text-base md:ml-6">
              <span>EAM has provided expert environmental & safety </span>
              <span>consulting across 18 African countries.</span>
            </span>
          </div>
        </h1>
      </div>
            {/* <div className="flex flex-column justify-center items-center text-center h-[500px] ">
                <h1 className="text-7xl font-custom font-extrabold ">Protecting the Environment for a Sustainable Future</h1>
                <p>
                  Since 1997, EAM s.a. has provided expert environmental 
                  and safety consulting across 18 African countries.
                   Licensed in Tunisia as a category A3 company, EAM has completed over 500 projects
                  , partnering with leading agencies to manage large-scale environmental initiatives.</p>
            </div> */}

            {/* <h1 className="absolute top-1/2 text-3xl font-bold ">Protecting the Environment for a Sustainable Future</h1>
            <p className="absolute top-60">EAM is committed to environmental protection, providing impactful solutions for a greener world.</p> */}
            <Wave/>
            
    </section>
  )
}

export default Hero
