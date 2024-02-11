import React from "react";
import Logo from "../assets/Logo1.png";

function FAQ() {  
    return (
        <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
            <div class="flex flex-col items-center">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">FAQ</h1>
                {/* <h2 class="font-bold text-5xl mt-5 tracking-tight">
                    FAQ
                </h2> */}
                <p class="text-neutral-500 text-xl mt-3">
                    Frequenty asked questions
                </p>
            </div>
            <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
                <div class="py-5">
                    <details class="group">
                        <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span> How does your platform utilize market data to optimize crop planning?</span>
                            <span class="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
        </svg>
                    </span>
                        </summary>
                        <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        We leverage comprehensive market data, including crop prices, demand, supply dynamics, and weather forecasts, to provide actionable insights and recommendations for farmers.
                        </p>
                    </details>
                </div>
                <div class="py-5">
                    <details class="group">
                        <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span>Can your platform predict profitability for different crop choices?</span>
                            <span class="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
        </svg>
                    </span>
                        </summary>
                        <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        Yes, we offer profitability predictions based on market trends and historical performance, empowering farmers to make informed decisions that maximize their returns.
                        </p>
                    </details>
                </div>
                <div class="py-5">
                    <details class="group">
                        <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span> Is your platform suitable for all types of farms?</span>
                            <span class="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
        </svg>
                    </span>
                        </summary>
                        <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        Absolutely. Our solutions are tailored to fit the unique needs of various farming operations, from small-scale family farms to large commercial enterprises.                        </p>
                    </details>
                </div>
                <div class="py-5">
                    <details class="group">
                        <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span>How do you ensure the accuracy of your recommendations?</span>
                            <span class="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
        </svg>
                    </span>
                        </summary>
                        <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        Our recommendations are based on rigorous analysis of real-time data and advanced algorithms, continuously refined to provide the most accurate and reliable insights.
                        </p>
                    </details>
                </div>
                <div class="py-5">
                    <details class="group">
                        <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span> Are there any technical requirements to access your platform?</span>
                            <span class="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
        </svg>
                    </span>
                        </summary>
                        <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        Our platform is accessible via web browser, requiring only an internet connection. No additional software or hardware installations are necessary.
                        </p>
                    </details>
                </div>
                <div class="py-5">
                    <details class="group">
                        <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span> Can I integrate your platform with my existing farm management systems?</span>
                            <span class="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
        </svg>
                    </span>
                        </summary>
                        <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        Yes, we offer seamless integration options to streamline data flow between our platform and your existing farm management systems, enhancing efficiency and productivity.

                        </p>
                    </details>
                </div>
                
                
                <div class="py-5">
                    <details class="group">
                        <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span> How can I get started with your platform?</span>
                            <span class="transition group-open:rotate-180">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
        </svg>
                    </span>
                        </summary>
                        <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                        Simply sign up for an account on our website, and our team will guide you through the onboarding process. From there, you'll have access to our suite of tools and resources to optimize your crop planning and maximize profitability.
                        </p>
                    </details>
                </div>
            </div>
        </div>
  );
}

export default FAQ;