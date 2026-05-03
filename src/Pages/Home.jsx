import React from 'react';
import LatestProduct from './LatestProducts/LatestProduct';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">

            {/* HERO SECTION */}
            <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row items-center gap-10">

                {/* TEXT SECTION */}
                <div className="flex-1 space-y-5">

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
                            Abash Builders
                        </span>
                    </h1>

                    <p className="text-gray-600 text-sm sm:text-base">
                        We provide trusted lands, property solutions and modern building services.
                        Your dream home is just one step away with us.
                    </p>

                    <div className="flex gap-4">
                        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-medium shadow-lg hover:scale-105 transition">
                            Explore Projects
                        </button>

                        <button className="px-6 py-3 rounded-full border border-orange-400 text-orange-500 font-medium hover:bg-orange-500 hover:text-white transition">
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* IMAGE SECTION */}
                <div className="flex-1">
                    <img
                        src="/src/assets/banner.jpg"
                        alt="building"
                        className="w-full rounded-2xl shadow-2xl object-cover"
                    />
                </div>

            </div>

            {/* FEATURE SECTION */}
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-orange-500">Trusted Property</h3>
                    <p className="text-gray-600 text-sm mt-2">Verified land & property deals you can trust.</p>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-orange-500">Modern Design</h3>
                    <p className="text-gray-600 text-sm mt-2">Smart and modern architectural solutions.</p>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-bold text-orange-500">Fast Service</h3>
                    <p className="text-gray-600 text-sm mt-2">Quick response and smooth service process.</p>
                </div>

            </div>
            {/* Latest Products */}
            <div>
                 <LatestProduct></LatestProduct>
            </div>

        </div>
    );
};

export default Home;