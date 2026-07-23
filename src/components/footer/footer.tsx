import { footerLinks, languages } from "@/data/data"

const socials = [
  { name: "Twitter", bg: "hover:bg-blue-500", initial: "T" },
  { name: "Instagram", bg: "hover:bg-pink-500", initial: "I" },
  { name: "LinkedIn", bg: "hover:bg-blue-600", initial: "L" },
  { name: "YouTube", bg: "hover:bg-red-500", initial: "Y" },
  { name: "TikTok", bg: "hover:bg-black", initial: "T" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300">
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-6 gap-10 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <span className="text-white font-bold text-lg">V</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
                </div>
                <div className="text-2xl font-bold text-white">Verse</div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-sm">
                Connect with real people to learn languages through culture. Build friendships,
                share experiences, and discover the world one conversation at a time.
              </p>
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  Popular Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {languages.slice(0, 6).map((lang, index) => (
                    <button
                      key={index}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-200 text-sm text-slate-300 hover:text-white"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-5">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-5">Community</h3>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-5">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-5">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-white transition-colors duration-200 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-12 p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Stay Connected</h3>
              <p className="text-slate-400 mb-6 text-sm">
                Get weekly cultural insights, language tips, and community highlights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm"
                />
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg whitespace-nowrap text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm">Follow Us</h4>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <button
                    key={s.name}
                    className={`w-10 h-10 bg-slate-800 ${s.bg} rounded-xl transition-all duration-200 hover:scale-110 flex items-center justify-center text-xs font-bold text-slate-400 hover:text-white`}
                  >
                    {s.initial}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm">Live Community</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-green-400">1,247</div>
                  <div className="text-xs text-slate-400">Online Now</div>
                </div>
                <div className="bg-slate-800 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400">89K</div>
                  <div className="text-xs text-slate-400">Conversations Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-sm">
            &copy; 2025 Verse. Made with love for language learners worldwide.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <button className="text-slate-400 hover:text-white transition-colors flex items-center gap-1">
              <span className="text-base">🌐</span> English
            </button>
            <div className="flex items-center gap-2 text-slate-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
