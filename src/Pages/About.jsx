import React from 'react';

const stats = [
  { value: '500+', label: 'সফল প্রজেক্ট' },
  { value: '12+', label: 'বছরের অভিজ্ঞতা' },
  { value: '2000+', label: 'সন্তুষ্ট গ্রাহক' },
  { value: '100%', label: 'আইনি নিরাপত্তা' },
];

const services = [
  { icon: '🏘', title: 'আবাসিক ও বাণিজ্যিক প্লট বিক্রয়', desc: 'প্রিমিয়াম লোকেশনে যাচাইকৃত জমি' },
  { icon: '⚖️', title: 'জমি কেনাবেচা ও আইনি পরামর্শ', desc: 'অভিজ্ঞ আইনজীবী দলের সহায়তা' },
  { icon: '📐', title: 'নির্মাণ ও আর্কিটেকচারাল কনসালটেন্সি', desc: 'আধুনিক ডিজাইন ও স্থাপত্য পরিকল্পনা' },
  { icon: '🗺️', title: 'জমির পরিমাপ ও সীমানা নির্ধারণ', desc: 'নির্ভুল জরিপ ও সীমানা চিহ্নিতকরণ' },
];

const features = [
  { icon: '🏡', title: 'Trusted Land', sub: 'আইনগতভাবে যাচাইকৃত জমি' },
  { icon: '🏗', title: 'Modern Build', sub: 'আধুনিক টেকসই নির্মাণ' },
  { icon: '🔐', title: 'Safe Investment', sub: '১০০% নিরাপদ বিনিয়োগ' },
];

const About = () => {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-white text-gray-800">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div className="space-y-5">
          <span className="inline-block text-xs px-4 py-1 bg-orange-100 text-orange-600 rounded-full">
            Since 2012 · Savar, Dhaka
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Abash <span className="text-orange-500">Builders & Lands</span>
          </h1>

          <p className="text-gray-600 leading-relaxed">
            নিজের আবাস মিলে করি, নিজের ভবিষ্যৎ গড়ে তুলি।
            আমরা রিয়েল এস্টেট সেক্টরে স্বচ্ছতা, সততা এবং নিরাপত্তা নিশ্চিত করি।
          </p>

          <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-400 text-white rounded-full shadow-lg hover:scale-105 transition">
            Contact Us
          </button>
        </div>

        {/* IMAGE */}
        <div>
          <img
            src="/src/assets/banner.jpg"
            alt="about"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
        </div>

      </section>

      {/* STATS */}
      <section className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 text-center gap-6">

          {stats.map((s, i) => (
            <div key={i}>
              <h2 className="text-3xl font-bold text-orange-400">{s.value}</h2>
              <p className="text-sm text-gray-400">{s.label}</p>
            </div>
          ))}

        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">আমাদের বিশেষত্ব</h2>

        <div className="grid md:grid-cols-3 gap-6">

          {features.map((f, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition text-center">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-lg text-orange-500">{f.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{f.sub}</p>
            </div>
          ))}

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-2xl font-bold mb-10 text-center">আমাদের সেবা সমূহ</h2>

          <div className="grid md:grid-cols-2 gap-6">

            {services.map((s, i) => (
              <div key={i} className="p-5 bg-white rounded-xl shadow flex gap-4 items-start">
                <div className="text-2xl">{s.icon}</div>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.desc}</p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">

        <h2 className="text-2xl font-bold mb-6">যোগাযোগ করুন</h2>

        <div className="bg-gradient-to-r from-orange-500 to-amber-400 text-white p-10 rounded-2xl shadow-lg space-y-3">

          <p>📞 01575003388</p>
          <p>📍 মডার্ন প্লাজা, সাভার, ঢাকা</p>
          <p>🕐 সকাল ৯টা – রাত ৭টা</p>

          <button className="mt-4 bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
            Call Now
          </button>

        </div>

      </section>

    </div>
  );
};

export default About;