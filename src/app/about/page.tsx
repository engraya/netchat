import React from 'react'
import Image from 'next/image'
function About() {
  return (
    <div className="sm:flex items-center max-w-screen-xl">
    <div className="sm:w-1/2 p-10">
      <div className="image object-center text-center">
        {/* <Image src="https://i.imgur.com/WbQnbas.png" alt="about image" height={200} width={200}/> */}
        <img src="https://i.imgur.com/WbQnbas.png" alt="about image" />
      </div>
    </div>
    <div className="sm:w-1/2 p-5">
      <div className="text">
        <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-indigo-600">NetChat</span>
        </h2>
        <p className="text-gray-500">
        NetChat is an innovative AI-powered app that transforms how you interact with websites. By simply prepending NetChat’s URL to any website’s address, you can initiate real-time conversations and receive instant, AI-driven responses. Whether you need quick information, help navigating complex pages, or personalized recommendations, NetChat makes your browsing experience seamless and intuitive. With features like automated form filling, contextual understanding, and multi-language support, NetChat enhances your online interactions, making the web more accessible and user-friendly. Experience a smarter way to browse with NetChat.
        </p>
      </div>
    </div>
  </div>
  
  )
}

export default About
