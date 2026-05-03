import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const STATUS_MAP = {
    available: { label: 'পাওয়া যাচ্ছে', color: '#16a34a', bg: 'rgba(22,163,74,0.1)', dot: '#16a34a' },
    booked: { label: 'বুকড', color: '#d97706', bg: 'rgba(217,119,6,0.1)', dot: '#d97706' },
    sold: { label: 'বিক্রিত', color: '#dc2626', bg: 'rgba(220,38,38,0.1)', dot: '#dc2626' },
};

const TYPE_ICONS = {
    'আবাসিক প্লট': '🏘',
    'বাণিজ্যিক প্লট': '🏢',
    'ভিলা': '🏡',
    'ফ্ল্যাট': '🏗',
    'শিল্প প্লট': '🏭',
};

const placeholderSrc = (id) =>
    `https://placehold.co/400x220/fef3c7/d97706?text=Plot+${id}`;

const PropertyCard = ({ data, index }) => {
    const status = STATUS_MAP[data.status] || STATUS_MAP.available;
    const typeIcon = TYPE_ICONS[data.type] || '🏠';

    return (
        <div className="prop-card" style={{ animationDelay: `${index * 0.1}s` }}>

            {/* IMAGE */}
            <div className="card-img-wrap">
                <img
                    src={data.image}
                    alt={data.title}
                    loading="lazy"
                    className="card-img"
                    onError={(e) => (e.target.src = placeholderSrc(data.id))}
                />

                <div className="status-badge" style={{ background: status.bg, color: status.color }}>
                    <span className="status-dot" style={{ background: status.dot }} />
                    {status.label}
                </div>

                <div className="type-chip">
                    {typeIcon} {data.type}
                </div>
            </div>

            {/* BODY */}
            <div className="card-body">

                <div className="card-title-row">
                    <h3 className="card-title">{data.title}</h3>
                    {data.legal && <span className="legal-tag">✔ আইনি</span>}
                </div>

                <div className="card-location">📍 {data.location}</div>

                <div className="card-meta">
                    <span>📐 {data.area}</span>
                    <span>🛣 {data.road}</span>
                    <span>🧭 {data.facing}</span>
                </div>

                <div className="card-features">
                    {data.features.slice(0, 3).map((f, i) => (
                        <span key={i} className="feature-tag">{f}</span>
                    ))}
                </div>

                <div className="card-footer">
                    <div>
                        <div className="price-label-sm">মূল্য</div>
                        <div className="price-value">{data.priceLabel}</div>
                    </div>

                    <button className="card-cta" disabled={data.status === 'sold'}>
                        {data.status === 'sold' ? 'বিক্রিত' : 'যোগাযোগ করুন'}
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
        <>
            <style>{`
        :root {
          --gold: #d97706;
          --gold-light: #fbbf24;
          --cream: #fffbf2;
          --ink: #1c1008;
          --warm-gray: #78716c;
          --border: rgba(217,119,6,0.15);
        }

        .lp-section {
          background: var(--cream);
          padding: 5rem 6vw;
          font-family: sans-serif;
        }

        /* HEADER */
        .lp-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .lp-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--ink);
        }

        .lp-title span {
          color: var(--gold);
        }

        .lp-sub {
          color: var(--warm-gray);
          margin-top: 0.5rem;
        }

        /* GRID 🔥 RESPONSIVE FIX */
        .prop-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.6rem;
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .prop-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* MOBILE */
        @media (max-width: 600px) {
          .prop-grid {
            grid-template-columns: 1fr;
          }
        }

        /* CARD */
        .prop-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid var(--border);
          transition: 0.3s;
        }

        .prop-card:hover {
          transform: translateY(-6px);
        }

        .card-img-wrap {
          position: relative;
          height: 200px;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .status-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 12px;
        }

        .type-chip {
          position: absolute;
          top: 10px;
          left: 10px;
          background: rgba(0,0,0,0.6);
          color: #fff;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 12px;
        }

        .card-body {
          padding: 1rem;
        }

        .card-title {
          font-size: 1rem;
          font-weight: 700;
        }

        .card-meta {
          display: flex;
          gap: 10px;
          font-size: 12px;
          margin-top: 6px;
          color: var(--warm-gray);
        }

        .feature-tag {
          font-size: 11px;
          padding: 3px 8px;
          background: rgba(217,119,6,0.1);
          border-radius: 6px;
          margin-right: 5px;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
        }

        .price-value {
          font-weight: bold;
          color: var(--gold);
        }

        .card-cta {
          background: var(--gold);
          color: #fff;
          border: none;
          padding: 6px 12px;
          border-radius: 999px;
          cursor: pointer;
        }

        .card-cta:disabled {
          background: #ccc;
        }
      `}</style>

            <section className="lp-section">

                <div className="lp-header">
                    <h2 className="lp-title">
                        আমাদের <span>সর্বশেষ প্লট</span>
                    </h2>
                    <p className="lp-sub">সেরা লোকেশনে প্রজেক্ট</p>
                </div>

                {loading ? (
                    <p style={{ textAlign: 'center' }}>Loading...</p>
                ) : (
                    <div className="prop-grid">
                        {datas.map((data, index) => (
                            <PropertyCard key={data.id} data={data} index={index} />
                        ))}
                    </div>
                )}

            </section>
            {/* View All Product */}

            {/* View All Product */}

            <div className="flex justify-center items-center my-16 py-12 bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border-y border-amber-200">
                <Link
                    to="/products"
                    className="relative overflow-hidden px-10 py-4 rounded-full text-white font-bold text-lg bg-gradient-to-r from-amber-600 to-yellow-400 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                    সকল প্রজেক্ট দেখুন →
                </Link>
            </div>

        </>
    );
};

export default LatestProduct;