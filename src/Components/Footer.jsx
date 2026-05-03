import React from "react";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 text-white pt-16 pb-8 px-6 md:px-12">

            {/* TOP GRID */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10 pb-10">

                {/* BRAND */}
                <div>
                    <h2 className="text-2xl font-bold text-amber-400">Abash Builders</h2>
                    <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                        আপনার স্বপ্নের আবাস গড়তে আমরা আছি সবসময়। নির্ভরযোগ্য প্লট,
                        নিরাপদ বিনিয়োগ এবং আইনি নিশ্চয়তা।
                    </p>
                </div>

                {/* LINKS */}
                <div>
                    <h3 className="text-lg font-semibold text-amber-300 mb-4">
                        দ্রুত লিংক
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link to="/" className="hover:text-amber-400">হোম</Link></li>
                        <li><Link to="/products" className="hover:text-amber-400">প্রজেক্ট</Link></li>
                        <li><Link to="/contact" className="hover:text-amber-400">যোগাযোগ</Link></li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div>
                    <h3 className="text-lg font-semibold text-amber-300 mb-4">
                        যোগাযোগ
                    </h3>
                    <p className="text-sm text-gray-400">📍 সাভার, ঢাকা</p>
                    <p className="text-sm text-gray-400 mt-1">📞 01575-003388</p>
                    <p className="text-sm text-gray-400 mt-1">✉️ info@abash.com</p>
                </div>
            </div>

            {/* BOTTOM */}
            <div className="text-center mt-8 text-xs text-gray-500">
                © {new Date().getFullYear()} Abash Builders. All Rights Reserved.
            </div>

        </footer>
    );
};

export default Footer;