"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {

 const [inputValue, setInputValue] = useState('');
  const router = useRouter();



    const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedValue = inputValue.trim();

    if (trimmedValue) {
      // Navigate to the dynamic chat page with the inputted URL
      router.push(`/${trimmedValue}`);
    }
  };

  const isButtonDisabled = !inputValue;
  
  return (
    <main>
      <div className="relative isolate overflow-hidden bg-g ray-900">
  <svg className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
    <defs>
      <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width={200} height={200} x="100%" y={-1} patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none" />
      </pattern>
    </defs>
    <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
      <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth={0} />
    </svg>
    <rect width="100%" height="100%" strokeWidth={0} fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" />
  </svg>
  <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
    <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20" style={{clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)'}}>
    </div>
  </div>
  <div className="mt-[-50px] flex h-screen items-center justify-center">
    <div className="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
      <h1 className="mt-10 text-5xl font-bold tracking-tight text-white sm:text-6xl">
      Unlock the power of <br />
        <span className="text-sky-500"> AI-driven conversations</span> with {" "}
        <span className="relative whitespace-nowrap">
    <svg aria-hidden="true" viewBox="0 0 281 40" className="absolute top-1/2 left-0 h-[1em] w-full fill-blue-400" preserveAspectRatio="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"></path></svg><span class="relative">NetChat</span></span>
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-300">Simply prepend our URL to any website and start chatting in real-time. Whether you're seeking information, navigating complex pages, or need help with a purchase, NetChat is your intelligent companion. Seamless, fast, and easy.</p>

            <div className="nameDiv flex items-center bg-gray-800 p-4 rounded-md max-w-xl mx-auto mt-16">
              <span className="text-green-500 text-2xl">&gt;</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="bg-gray-700 text-white p-3 rounded-lg outline-none ml-2 w-full"
                placeholder="Enter your name here"
              />
            </div>

            <div className="buttonDiv flex justify-center mx-auto items-center max-w-xl mt-10">
           
            <button
             onClick={handleSubmit}
                  className={`px-6 py-2 font-bold rounded-full transition-transform transform-gpu ${
                    isButtonDisabled
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'animate-bounce focus:animate-none hover:animate-none bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:-translate-y-1 hover:shadow-lg'
                  }`}
                  disabled={isButtonDisabled}
                >
                  Generate!
                </button>
           </div> 
    </div>
  </div>
</div>
    </main>
  );
}



