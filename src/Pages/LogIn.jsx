import React, { useState } from 'react';
import { Link } from 'react-router';
import useAuth from '../Hooks/useAuth';

const LogIn = () => {
    const { logInUser, googleLogin } = useAuth();

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        setSuccess('');
        setError('');

        const email = e.target.email.value;
        const password = e.target.password.value;

        logInUser(email, password)
            .then(res => {
                console.log(res.user);
                setSuccess("Login successful 🎉");
                setError("");
                e.target.reset();
            })
            .catch(err => {
                setError(err.message);
                setSuccess("");
            });
    };

    // 🌐 Google Login
    const handleGoogleLogin = () => {
        setSuccess('');
        setError('');

        googleLogin()
            .then(res => {
                // console.log(res.user);
                setSuccess("Google login successful 🎉");
            })
            .catch(err => {
                setError(err.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 px-4">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-amber-100 p-8">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    লগইন করুন
                </h2>

                <p className="text-center text-sm text-gray-500 mb-6">
                    আপনার একাউন্টে প্রবেশ করুন
                </p>

                {/* Messages */}
                {success && (
                    <p className="text-green-600 text-sm text-center mb-3 font-medium">
                        {success}
                    </p>
                )}

                {error && (
                    <p className="text-red-500 text-sm text-center mb-3 font-medium">
                        {error}
                    </p>
                )}

                <form onSubmit={handleLogin} className="space-y-4">

                    <input
                        type="email"
                        name='email'
                        placeholder="ইমেইল"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 outline-none"
                    />

                    <input
                        type="password"
                        name='password'
                        placeholder="পাসওয়ার্ড"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-500 outline-none"
                    />

                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-400 text-white font-bold shadow-lg hover:scale-[1.02] transition"
                    >
                        লগইন করুন
                    </button>
                </form>

                {/* 🔥 Google Login Button */}
                <button
                    onClick={handleGoogleLogin}
                    className="w-full mt-4 flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition"
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="google"
                        className="w-5 h-5"
                    />
                    Google দিয়ে লগইন করুন
                </button>

                <p className="text-center text-sm mt-6 text-gray-600">
                    অ্যাকাউন্ট নেই?{' '}
                    <Link
                        to="/auth/registation"
                        className="text-amber-600 font-semibold hover:underline"
                    >
                        রেজিস্ট্রেশন করুন
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default LogIn;