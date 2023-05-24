"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 pt-16 sm:py-32 md:py-36 md:pb-10 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/profile.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold my-7 md:mt-0 md:text-4xl">Full Stack Web Developer 👋</h1>
          <p className="text-lg mt-4 md:text-2xl">
            Hi, I&#39;m <span className="font-semibold text-teal-600">Mohith Gadireddy</span>
          </p>
          <p className="text-lg mt-4 mb-10 md:text-2xl">
            A passionate Full-stack Web Developer based in Hyderabad, India 📍
            {/* <span className="font-semibold text-teal-600">
            </span> */}
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>

      <div className="hidden sm:flex flex-row items-center text-center justify-center  ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={45} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
