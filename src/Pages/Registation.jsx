import React from 'react';
import { Link } from 'react-router';
import useAuth from '../Hooks/useAuth';
const Registation = () => {
   const info = useAuth()
   console.log(info);
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-amber-100 p-8">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    রেজিস্ট্রেশন করুন
                </h2>

                <p className="text-center text-sm text-gray-500 mb-6">
                    নতুন একাউন্ট তৈরি করুন
                </p>

                {/* Form */}
                <form className="space-y-4">

                    <input
                        type="text"
                        placeholder="আপনার নাম"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 outline-none"
                    />

                    <input
                        type="email"
                        placeholder="ইমেইল"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 outline-none"
                    />

                    <input
                        type="password"
                        placeholder="পাসওয়ার্ড"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 outline-none"
                    />

                    <input
                        type="password"
                        placeholder="কনফার্ম পাসওয়ার্ড"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 outline-none"
                    />

                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-400 text-white font-bold shadow-lg hover:scale-[1.02] transition"
                    >
                        রেজিস্ট্রেশন করুন
                    </button>
                </form>

                {/* Switch to Login */}
                <p className="text-center text-sm mt-6 text-gray-600">
                    ইতিমধ্যে অ্যাকাউন্ট আছে?{' '}
                    <Link
                        to="/auth"
                        className="text-amber-600 font-semibold hover:underline"
                    >
                        লগইন করুন
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Registation;