import React, { useState } from 'react';

const FIELDS = [
  {
    id: 'name',
    label: 'আপনার নাম',
    placeholder: 'মোঃ রহিম উদ্দিন',
    type: 'text',
    icon: '👤',
  },
  {
    id: 'phone',
    label: 'ফোন নম্বর',
    placeholder: '01XXXXXXXXX',
    type: 'tel',
    icon: '📞',
  },
  {
    id: 'email',
    label: 'ইমেইল (ঐচ্ছিক)',
    placeholder: 'you@example.com',
    type: 'email',
    icon: '✉️',
  },
];

const SERVICES = [
  'আবাসিক প্লট কেনা',
  'বাণিজ্যিক প্লট কেনা',
  'জমি বিক্রয়',
  'নির্মাণ পরামর্শ',
  'আইনি সহায়তা',
  'অন্যান্য',
];

const INFO = [
  {
    icon: '📞',
    label: 'হটলাইন',
    value: '01575003388',
    link: 'tel:01575003388',
  },
 {
  icon: '📍',
  label: 'ঠিকানা',
  value: 'শপ-৪১, মডার্ন প্লাজা, থানা স্ট্যান্ড, সাভার, ঢাকা',
  link: null,
},
  {
    icon: '🕐',
    label: 'সময়',
    value: 'সকাল ৯টা – রাত ৭টা',
    link: null,
  },
  {
    icon: '📧',
    label: 'ইমেইল',
    value: 'bk.support@gmail.com',
    link: 'mailto:abash.support@gmail.com',
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.service) {
      return alert('দয়া করে প্রয়োজনীয় তথ্য পূরণ করুন');
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100">

      {/* HERO */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-400 py-16 text-center text-white relative overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            আমাদের সাথে যোগাযোগ করুন
          </h1>

          <p className="mt-4 text-sm sm:text-base opacity-90">
            আপনার স্বপ্নের আবাস নিয়ে আমরা আছি আপনার পাশে
          </p>
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Contact Info
            </h2>

            <p className="text-gray-600 mt-3 leading-relaxed">
              যেকোনো তথ্যের জন্য সরাসরি যোগাযোগ করুন।
              আমাদের টিম সর্বদা আপনার পাশে আছে।
            </p>
          </div>

          {/* INFO CARD */}
          <div className="space-y-4">

            {INFO.map((item, i) =>
              item.link ? (
                <a
                  key={i}
                  href={item.link}
                  className="group flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-orange-200"
                >
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                      {item.label}
                    </p>

                    <p className="font-semibold text-gray-800">
                      {item.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div
                  key={i}
                  className="group flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md border border-gray-100"
                >
                  <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">
                      {item.label}
                    </p>

                    <p className="font-semibold text-gray-800">
                      {item.value}
                    </p>
                  </div>
                </div>
              )
            )}

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-[30px] shadow-2xl border border-orange-100 overflow-hidden">

          {/* GLOW EFFECT */}
          <div className="absolute -top-20 -right-20 w-52 h-52 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-amber-200 rounded-full blur-3xl opacity-30"></div>

          {submitted ? (
            <div className="text-center py-12 relative z-10">

              <div className="text-6xl animate-bounce">
                ✅
              </div>

              <h2 className="text-3xl font-extrabold mt-4 text-gray-800">
                Message Sent!
              </h2>

              <p className="text-gray-500 mt-3 leading-relaxed">
                আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-7 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
              >
                আবার পাঠান
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
            >

              {/* HEADING */}
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-gray-800">
                  যোগাযোগ ফর্ম
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  আপনার তথ্য দিন, আমরা দ্রুত যোগাযোগ করব
                </p>
              </div>

              {/* INPUTS */}
              {FIELDS.map((f) => (
                <div key={f.id} className="space-y-2">

                  <label className="text-sm font-medium text-gray-600">
                    {f.label}
                  </label>

                  <div
                    className={`group flex items-center rounded-2xl border bg-white px-4 py-3 transition-all duration-300
                    ${focused === f.id
                        ? 'border-orange-400 shadow-lg shadow-orange-100 scale-[1.01]'
                        : 'border-gray-200 hover:border-orange-300'
                      }`}
                  >
                    <span className="text-xl mr-3 group-hover:scale-110 transition">
                      {f.icon}
                    </span>

                    <input
                      id={f.id}
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.id]}
                      onChange={handleChange}
                      onFocus={() => setFocused(f.id)}
                      onBlur={() => setFocused('')}
                      className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
                    />
                  </div>

                </div>
              ))}

              {/* SERVICE */}
              <div>

                <label className="text-sm font-medium text-gray-600">
                  সেবা নির্বাচন *
                </label>

                <div className="flex flex-wrap gap-3 mt-3">

                  {SERVICES.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() =>
                        setForm({
                          ...form,
                          service: s,
                        })
                      }
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300
                      ${form.service === s
                          ? 'bg-gradient-to-r from-orange-500 to-amber-400 text-white border-transparent shadow-lg scale-105'
                          : 'bg-white hover:border-orange-400 hover:text-orange-500'
                        }`}
                    >
                      {s}
                    </button>
                  ))}

                </div>
              </div>

              {/* TEXTAREA */}
              <div>

                <label className="text-sm font-medium text-gray-600">
                  আপনার বার্তা
                </label>

                <textarea
                  id="message"
                  placeholder="আপনার বার্তা লিখুন..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full mt-2 border border-gray-200 rounded-2xl p-4 h-32 resize-none outline-none transition-all duration-300 focus:border-orange-400 focus:shadow-lg focus:shadow-orange-100"
                />

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 py-4 text-white font-bold text-lg shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >

                <span className="relative z-10 flex items-center justify-center gap-2">
                  📩 পাঠান
                </span>

                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;