import React from "react"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineInstagram
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900">
        <div className="flex flex-row items-center justify-center space-x-4 m-4">
          <a href="https://github.com/Mohith234" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-800 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/Mohith_twt"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-800 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mohith-gadireddy/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-800 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://www.instagram.com/mohithgadireddy/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-800 dark:text-neutral-100"
              size={30}
            />
          </a>
          {/* <a
            href="https://www.youtube.com/channel/UCQBMkSDgbxDb8usMeXmOZyA"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={40}
            />
          </a> */}
        </div>
        <div className="font-semibold flex flex-row items-center justify-center space-x-1 text-neutral-800 dark:text-gray-400">
          Built with ❤️ by Mohith Gadireddy
        </div>
      </div>
    </footer>
  )
}

export default Footer
