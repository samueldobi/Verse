export default function Features(){
    return(
        <>
            <section className="px-6 py-16 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-blue-600 dark:bg-blue-400 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold">Real Conversations</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Practice with native speakers who share their culture and daily experiences
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-green-600 dark:bg-green-400 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold">Cultural Learning</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Discover traditions, customs, and local insights that textbooks cant teach
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto">
                <div className="w-8 h-8 bg-purple-600 dark:bg-purple-400 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold">Global Friendships</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Build meaningful connections that last beyond your language learning journey
              </p>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}