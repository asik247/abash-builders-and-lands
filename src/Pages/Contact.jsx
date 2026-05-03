import React, { useState } from 'react';

const FIELDS = [
  { id: 'name', label: 'আপনার নাম', placeholder: 'মোঃ রহিম উদ্দিন', type: 'text', icon: '👤' },
  { id: 'phone', label: 'ফোন নম্বর', placeholder: '01XXXXXXXXX', type: 'tel', icon: '📞' },
  { id: 'email', label: 'ইমেইল (ঐচ্ছিক)', placeholder: 'you@example.com', type: 'email', icon: '✉️' },
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
  { icon: '📞', label: 'হটলাইন', value: '01575003388', link: 'tel:01575003388' },
  { icon: '📍', label: 'ঠিকানা', value: 'মডার্ন প্লাজা, সাভার, ঢাকা', link: null },
  { icon: '🕐', label: 'সময়', value: 'সকাল ৯টা – রাত ৭টা', link: null },
  { icon: '📧', label: 'ইমেইল', value: 'abash.support@gmail.com', link: 'mailto:info@abashbuilders.com' },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">

      {/* HERO */}
      <div className="text-center py-14 bg-gradient-to-r from-orange-500 to-amber-400 text-white">
        <h1 className="text-3xl sm:text-4xl font-extrabold">
          আমাদের সাথে যোগাযোগ করুন
        </h1>
        <p className="mt-2 text-sm opacity-90">
          আপনার স্বপ্নের আবাস নিয়ে আমরা আছি আপনার পাশে
        </p>
      </div>

      {/* BODY */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

        {/* LEFT INFO */}
        <div className="space-y-6">

          <div>
            <h2 className="text-2xl font-bold">Contact Info</h2>
            <p className="text-gray-600 text-sm mt-2">
              যেকোনো তথ্যের জন্য সরাসরি যোগাযোগ করুন।
            </p>
          </div>

          <div className="space-y-3">
            {INFO.map((item, i) =>
              item.link ? (
                <a key={i} href={item.link}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl shadow hover:shadow-md transition">
                  <span>{item.icon}</span>
                  <div>
                    <p className="text-xs text-gray-400">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </a>
              ) : (
                <div key={i}
                  className="flex items-center gap-3 p-3 bg-white rounded-xl shadow">
                  <span>{item.icon}</span>
                  <div>
                    <p className="text-xs text-gray-400">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </div>
              )
            )}
          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">

          {submitted ? (
            <div className="text-center py-10">
              <div className="text-4xl">✅</div>
              <h2 className="text-xl font-bold mt-3">Message Sent!</h2>
              <p className="text-gray-500 text-sm mt-2">
                আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="mt-5 px-6 py-2 bg-orange-500 text-white rounded-full"
              >
                আবার পাঠান
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* FIELDS */}
              {FIELDS.map((f) => (
                <div key={f.id}>
                  <label className="text-xs text-gray-500">{f.label}</label>

                  <div className={`flex items-center border rounded-lg px-3 py-2 mt-1 transition
                    ${focused === f.id ? 'border-orange-400 shadow' : 'border-gray-200'}`}>

                    <span className="mr-2">{f.icon}</span>

                    <input
                      id={f.id}
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.id]}
                      onChange={handleChange}
                      onFocus={() => setFocused(f.id)}
                      onBlur={() => setFocused('')}
                      className="w-full outline-none bg-transparent"
                    />
                  </div>
                </div>
              ))}

              {/* SERVICE */}
              <div>
                <label className="text-xs text-gray-500">সেবা নির্বাচন *</label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {SERVICES.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => setForm({ ...form, service: s })}
                      className={`px-3 py-1 text-sm rounded-full border transition
                        ${form.service === s
                          ? 'bg-orange-500 text-white'
                          : 'hover:border-orange-400'
                        }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* MESSAGE */}
              <textarea
                id="message"
                placeholder="আপনার বার্তা লিখুন..."
                value={form.message}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 h-28 outline-none focus:border-orange-400"
              />

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-400 text-white py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                📩 পাঠান
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};

export default Contact;