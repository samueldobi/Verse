"use client";
import React, { useState } from 'react';
import { learnLanguages,learnInterests } from '@/data/data';

export default function LearnPage() {
  const [speakLanguage, setSpeakLanguage] = useState('');
  const [learnLanguage, setLearnLanguage] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);


  const handleInterestToggle = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const handleFindBuddy = async () => {
    if (!speakLanguage || !learnLanguage) return;
    
    setIsLoading(true);
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    
    // In real app, redirect to matching results or buddy profile
    alert(`Finding buddies who speak ${learnLanguage} and want to learn ${speakLanguage}!`);
  };

  const isFormValid = speakLanguage && learnLanguage && speakLanguage !== learnLanguage;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Language Matching</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Choose your languages and we will find your{' '}
            <span className="text-blue-600 dark:text-blue-400">perfect buddy!</span>
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Connect with native speakers who want to learn your language while you practice theirs.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
          {/* Visual Header */}
          <div className="relative p-8 bg-slate-100 dark:bg-slate-750">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">🗣️</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="w-4 h-0.5 bg-blue-500 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl font-bold">🎯</span>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8 space-y-8">
            {/* Language Selection */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* I Speak */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  I Speak
                </label>
                <div className="relative">
                  <select
                    value={speakLanguage}
                    onChange={(e) => setSpeakLanguage(e.target.value)}
                    className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Select your native language...</option>
                    {learnLanguages.map((lang) => (
                      <option key={lang.code} value={lang.name}>
                        {lang.flag} {lang.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin opacity-0"></div>
                  </div>
                </div>
              </div>

              {/* I Want to Learn */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  I Want to Learn
                </label>
                <div className="relative">
                  <select
                    value={learnLanguage}
                    onChange={(e) => setLearnLanguage(e.target.value)}
                    className="w-full px-4 py-4 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Select language to learn...</option>
                    {learnLanguages.filter(lang => lang.name !== speakLanguage).map((lang) => (
                      <option key={lang.code} value={lang.name}>
                        {lang.flag} {lang.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Interests Section */}
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  What are you interested in?
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Select topics you'd love to discuss with your language buddy
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {learnInterests.map((interest) => {
                  const isSelected = selectedInterests.includes(interest);
                  return (
                    <button
                      key={interest}
                      onClick={() => handleInterestToggle(interest)}
                      className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                      }`}
                    >
                      {interest}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action Button */}
            <div className="text-center pt-6">
              <button
                onClick={handleFindBuddy}
                disabled={!isFormValid || isLoading}
                className={`px-12 py-4 font-bold text-lg rounded-2xl transition-all duration-300 transform ${
                  isFormValid && !isLoading
                    ? 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 cursor-pointer'
                    : 'bg-slate-300 dark:bg-slate-600 text-slate-500 dark:text-slate-400 cursor-not-allowed'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Finding Your Buddy...</span>
                  </div>
                ) : (
                  'Find My Buddy'
                )}
              </button>

              {!isFormValid && speakLanguage && learnLanguage && speakLanguage === learnLanguage && (
                <p className="text-red-500 text-sm mt-3">
                  Please select different languages for speaking and learning
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Encouragement */}
        <div className="text-center mt-12 space-y-4">
          <div className="flex items-center justify-center space-x-8 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Safe & Verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Free to Start</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Global Community</span>
            </div>
          </div>
          
          <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            Join thousands of language learners already making friends and improving their skills through cultural exchange.
          </p>
        </div>
      </div>
    </div>
  );
}