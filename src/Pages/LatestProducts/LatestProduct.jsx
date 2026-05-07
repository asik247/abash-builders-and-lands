import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const STATUS_MAP = {
  available: { label: 'Available', color: '#16a34a' },
  booked: { label: 'Booked', color: '#d97706' },
  sold: { label: 'Sold', color: '#dc2626' },
};

const PropertyCard = ({ data }) => {
  const status = STATUS_MAP[data.status] || STATUS_MAP.available;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md border border-orange-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

      {/* IMAGE */}
      <div className="relative h-52 overflow-hidden">

        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          onError={(e) => (e.target.src = 'https://placehold.co/400x250')}
        />

        {/* STATUS */}
        <span
          className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full text-white"
          style={{ backgroundColor: status.color }}
        >
          {status.label}
        </span>

      </div>

      {/* BODY */}
      <div className="p-5 space-y-3">

        <h3 className="font-bold text-gray-800 text-lg">
          {data.title}
        </h3>

        <p className="text-gray-500 text-sm">
          📍 {data.location}
        </p>

        {/* META */}
        <div className="flex justify-between text-xs text-gray-500">
          <span>📐 {data.area}</span>
          <span>🛣 {data.road}</span>
          <span>🧭 {data.facing}</span>
        </div>

        {/* PRICE + BUTTON */}
        <div className="flex items-center justify-between pt-2">

          <div className="text-orange-500 font-bold">
            {data.priceLabel}
          </div>

          <button
            disabled={data.status === 'sold'}
            className={`px-4 py-2 rounded-full text-sm font-medium transition
                        ${data.status === 'sold'
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-orange-500 to-amber-400 text-white hover:scale-105'
              }`}
          >
            {data.status === 'sold' ? 'Sold' : 'Contact'}
          </button>

        </div>

      </div>
    </div>
  );
};

const LatestProduct = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {
        setDatas(data.slice(0, 6));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">

      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold">
          সর্বশেষ <span className="text-orange-500">প্রজেক্টসমূহ</span>
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          প্রাইম লোকেশনে প্রিমিয়াম প্লট
        </p>
      </div>
      {/* GRID */}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {datas.map((data) => (
            <PropertyCard key={data.id} data={data} />
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="flex justify-center mt-14">

        <Link
          to="/products"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-bold shadow-lg hover:scale-105 transition"
        >
          সকল প্রজেক্ট দেখুন →
        </Link>

      </div>

    </section>
  );
};

export default LatestProduct;