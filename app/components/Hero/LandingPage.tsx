
"use client";


import bgImg from "@/app/assets/productImg/3811882.jpg"
import Image from "next/image";


export default function LandingPage() {

  return (

    <div className="relative bg-gray-300 overflow-hidden">

      {/* ── Navbar ── */}
             <nav className="flex items-center justify-between px-8 py-2 bg-gray-100 relative z-30 backdrop-blur-2xl">
        <span className="text-[15px] font-bold text-primary tracking-[0.18em] uppercase">Tisso Vison</span>
        <span className="text-[13px] text-gray-800 tracking-tight hidden md:block">Find the ideal gift for your loved ones.</span>
        <button  className="bg-secondary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer text-gray-900 px-5 py-2.5 text-xs uppercase flex items-center gap-3">
          Choose Gift <span className="text-base">→</span>
        </button>
      </nav>
      
       {/* full background Image */}
        <Image
          src={bgImg}
          alt="hero"
          className="w-full h-[100vh] object-cover opacity-40 "
        />

        {/* ── Text Block */}
        <div className="absolute inset-0 flex flex-col justify-center items-center  z-10 ">
          <h1
            className="text-6xl font-semibold text-primary mb-10 backdrop-blur-md"
          >
            The Gift Guide
          </h1>
          <p className= "text-sm text-gray-900 leading-relaxed mb-8 max-w-sm fade-up delay-2 backdrop-blur-md">
            Discover Joy: Your Ultimate Holiday Gift Destination.
            Explore our curated selection and find the perfect gifts to
            delight your loved ones this holiday season.
          </p>
          <div className={`flex items-center gap-4 fade-up delay-3`}>
            <button className="bg-primary px-7 py-3 hover:bg-secondary hover:text-primary transition-all duration-300 cursor-pointer text-xs font-medium tracking-[0.15em] uppercase flex items-center gap-3">
              Shop Now <span className="text-base">→</span>
            </button>
          </div>
        </div>

                    {/* ── Footer ── */}
             <footer className="flex items-center justify-center px-8 py-2 bg-gray-50 z-30 backdrop-blur-2xl">
        <span className="text-[13px] text-gray-800 tracking-tight hidden md:block">
SUSTAINABLE, ETHICALLY MADE CLOTHES IN SIZES XXS TO 6XL</span>
      </footer> 
      </div>

  )
}