import React from 'react'

const ContactSection = () => {
  return (
    <section id='contact'>
      <div className="my-12 pb-12 md:pt-2">
        <h1 className="text-center font-bold text-4xl">
          Contact Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex justify-center">
          <div className="bg-[#2f394d] p-8 rounded-2xl shadow-md w-2/3">
            <form className='mx-auto'>
              <div className="my-3 mx-auto">
                <input type="text" className='w-full mt-2 p-4 outline-none border-none bg-gray-200 text-black' placeholder='Name'/>
              </div>
              <div className="my-3 mx-auto">
                <input type="text" className='w-full mt-2 p-4 outline-none border-none bg-gray-200 text-black' placeholder='Email'/>
              </div>
              <div className="my-3 mx-auto">
                <input type="text" className='w-full mt-2 p-4 h-48 outline-none border-none bg-gray-200 text-black' placeholder='Message'/>
              </div>
              <button className='w-full bg-teal-600 text-white font-bold py-2 px-4 rounded-full'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection