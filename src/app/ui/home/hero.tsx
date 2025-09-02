export default function Hero(){
    return(
        <>
          <main className="px-6 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Learn Languages Through{' '}
                  <span className="text-blue-600 dark:text-blue-400 relative">
                    Culture
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-200 dark:bg-blue-800 rounded-full"></div>
                  </span>
                  , Not Just Grammar.
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  Verse connects you with real people to practice local and global languages, 
                  share daily cultural nuggets, and build friendships while you learn.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                  Find My Language Buddy
                </button>
                <button className="px-8 py-4 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  Watch Demo
                </button>
              </div>

              {/* Social Proof */}
              <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  Trusted by language learners worldwide
                </p>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900 dark:text-white">50K+</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Active Learners</div>
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
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative z-10">
                {/* Language Cards Stack */}
                <div className="space-y-4">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 transform rotate-2">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                        中
                      </div>
                      <div>
                        <div className="font-semibold">Learning Mandarin</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">with Li from Beijing</div>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      "Today I learned about the Mid-Autumn Festival and how families gather to appreciate the moon..."
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 transform -rotate-1 ml-8">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                        Es
                      </div>
                      <div>
                        <div className="font-semibold">Practicing Spanish</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">with María from Barcelona</div>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      "¡Hola! Let's talk about tapas culture and how Spanish people socialize..."
                    </div>
                  </div>

                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 transform rotate-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        Fr
                      </div>
                      <div>
                        <div className="font-semibold">French Immersion</div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">with Antoine from Lyon</div>
                      </div>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      "Bonjour! Today we explore French café culture and the art of conversation..."
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </main>
        </>
    )
}