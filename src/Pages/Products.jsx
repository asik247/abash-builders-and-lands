import React, { useEffect, useState } from 'react';

const STATUS_MAP = {
    available: { label: 'পাওয়া যাচ্ছে', color: '#16a34a' },
    booked: { label: 'বুকড', color: '#d97706' },
    sold: { label: 'বিক্রিত', color: '#dc2626' },
};

const TYPE_ICONS = {
    'আবাসিক প্লট': '🏘',
    'বাণিজ্যিক প্লট': '🏢',
    'ভিলা': '🏡',
    'ফ্ল্যাট': '🏗',
    'শিল্প প্লট': '🏭',
};

const placeholderSrc = (id) =>
    `https://placehold.co/400x250/fef3c7/d97706?text=Plot+${id}`;

const PropertyCard = ({ data }) => {
    const status = STATUS_MAP[data.status] || STATUS_MAP.available;
    const typeIcon = TYPE_ICONS[data.type] || '🏠';

    return (
        <div className="group bg-white rounded-3xl overflow-hidden shadow-md border border-orange-100 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

            {/* IMAGE */}
            <div className="relative h-52 overflow-hidden">

                <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    onError={(e) => (e.target.src = placeholderSrc(data.id))}
                />

                {/* STATUS */}
                <span
                    className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: status.color }}
                >
                    {status.label}
                </span>

                {/* TYPE */}
                <span className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                    {typeIcon} {data.type}
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
                        {data.status === 'sold' ? 'বিক্রিত' : 'যোগাযোগ'}
                    </button>

                </div>

            </div>
        </div>
    );
};

const Products = () => {
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                setDatas(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <section className="py-16 px-4 max-w-6xl mx-auto">

            {/* HEADER */}
            <div className="text-center mb-12">

                <h2 className="text-3xl font-extrabold">
                    আমাদের <span className="text-orange-500">সকল প্রজেক্ট</span>
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                    Premium verified plots in prime locations
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

        </section>
    );
};

export default Products;