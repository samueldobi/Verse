"use client";
import React, { useState } from 'react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!isLogin && formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      if (!formData.agreeTerms) {
        newErrors.agreeTerms = 'You must agree to the terms';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);

    // In real app, handle authentication here
    alert(isLogin ? 'Login successful!' : 'Account created successfully!');
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSocialAuth = (provider) => {
    alert(`${provider} authentication would be implemented here`);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding & Info */}
        <div className="hidden lg:block space-y-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-50 animate-pulse"></div>
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white">
                Verse
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Connect. Learn.{' '}
                <span className="text-blue-600 dark:text-blue-400">Grow.</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
                Join thousands of language learners connecting through culture, building friendships, and mastering new languages together.
              </p>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 dark:text-blue-400 text-lg">🌍</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Global Community</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Connect with native speakers from around the world</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 dark:text-green-400 text-lg">🎯</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Cultural Learning</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Learn languages through real cultural experiences</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 dark:text-purple-400 text-lg">🚀</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Fast Progress</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Accelerate your learning through conversation practice</p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex items-center space-x-8 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">50K+</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Learners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">120+</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">4.9★</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Rating</div>
            </div>
          </div>
        </div>

        {/* Right Side - Auth Form */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            {/* Mobile Logo */}
            <div className="lg:hidden p-6 text-center border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">V</span>
                </div>
                <div className="text-xl font-bold text-slate-900 dark:text-white">Verse</div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">Learn languages through culture</p>
            </div>

            {/* Form Header */}
            <div className="p-6 pb-0">
              <div className="text-center space-y-2 mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {isLogin ? 'Welcome Back!' : 'Join Verse Today'}
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  {isLogin 
                    ? 'Continue your language learning journey'
                    : 'Start connecting with language partners worldwide'
                  }
                </p>
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-3 mb-6">
                <button 
                  onClick={() => handleSocialAuth('Google')}
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 flex items-center justify-center space-x-3 group"
                >
                  <div className="w-5 h-5 bg-red-500 rounded-sm group-hover:scale-110 transition-transform"></div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Continue with Google</span>
                </button>
                <button 
                  onClick={() => handleSocialAuth('Facebook')}
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 flex items-center justify-center space-x-3 group"
                >
                  <div className="w-5 h-5 bg-blue-600 rounded-sm group-hover:scale-110 transition-transform"></div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">Continue with Facebook</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    Or continue with email
                  </span>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="p-6 pt-0 space-y-4">
              {/* Name Field (Signup only) */}
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.name ? 'border-red-300 dark:border-red-600' : 'border-slate-300 dark:border-slate-600'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                  )}
                </div>
              )}

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.email ? 'border-red-300 dark:border-red-600' : 'border-slate-300 dark:border-slate-600'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.password ? 'border-red-300 dark:border-red-600' : 'border-slate-300 dark:border-slate-600'
                  }`}
                  placeholder={isLogin ? "Enter your password" : "Create a password (8+ characters)"}
                />
                {errors.password && (
                  <p className="text-sm text-red-600 dark:text-red-400">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password (Signup only) */}
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-700 border rounded-xl text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.confirmPassword ? 'border-red-300 dark:border-red-600' : 'border-slate-300 dark:border-slate-600'
                    }`}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-600 dark:text-red-400">{errors.confirmPassword}</p>
                  )}
                </div>
              )}

              {/* Terms Agreement (Signup only) */}
              {!isLogin && (
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-blue-600 border-slate-300 dark:border-slate-600 rounded focus:ring-blue-500"
                  />
                  <div className="text-sm">
                    <span className="text-slate-600 dark:text-slate-400">
                      I agree to the{' '}
                      <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</a>
                      {' '}and{' '}
                      <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>
                    </span>
                    {errors.agreeTerms && (
                      <p className="text-red-600 dark:text-red-400 mt-1">{errors.agreeTerms}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Forgot Password (Login only) */}
              {isLogin && (
                <div className="text-right">
                  <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                    Forgot your password?
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className={`w-full py-3 font-semibold rounded-xl transition-all duration-200 transform ${
                  isLoading
                    ? 'bg-slate-300 dark:bg-slate-600 text-slate-500 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin"></div>
                    <span>{isLogin ? 'Signing in...' : 'Creating account...'}</span>
                  </div>
                ) : (
                  isLogin ? 'Sign In' : 'Create Account'
                )}
              </button>
            </div>

            {/* Switch Auth Mode */}
            <div className="p-6 pt-0 text-center">
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                <button
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setFormData({ name: '', email: '', password: '', confirmPassword: '', agreeTerms: false });
                    setErrors({});
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Free to Start</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>No Spam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}