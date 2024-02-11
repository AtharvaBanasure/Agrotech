import React from "react";
import Bg from "../assets/Bgimg.jpg";

function Herosection() {  
    return (
        <section class="text-gray-600 body-font mt-32">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center rounded h-full w-full" alt="hero" src={Bg} style={{ maxWidth: '100%', borderRadius: '1rem' }}/>
                {/* <div className="absolute inset-0 rounded" style={{ backgroundImage: 'radial-gradient(circle, rgba(0, 128, 0, 0.1) 0%, rgba(0, 128, 0, 0.02) 100%)' }} /> */}
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Grow Smart, Harvest Big
                {/* <br class="hidden lg:inline-block"/> Harvest Big */}
            </h1>
            <p class="mb-8 leading-relaxed">Agrotech where innovation meets agriculture. By harnessing the power of comprehensive market data, including crop prices, demand, and supply, along with historical yield and performance metrics, and real-time weather forecasts, we provide farmers with a strategic advantage in decision-making. Say goodbye to guesswork and hello to precision farming. We provide actionable insights and recommendations tailored to your farm's unique needs, helping you make informed decisions that drive profitability. Explore our intuitive tools, visualize market trends, and unlock the potential of your land with confidence. Join the future of farming today.</p>
            {/* <div class="flex justify-center">
                <button class="inline-flex text-white bg-green-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">Button</button>
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div> */}
            </div>
        </div>
        </section>
  );
}

export default Herosection;