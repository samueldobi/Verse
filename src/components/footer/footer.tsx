import { footerLinks, languages} from "@/data/data"
export default function Footer(){
    return(
        <>        
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-300">
      {/* Main Footer Content */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <span className="text-white font-bold text-lg">V</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
                </div>
                <div className="text-2xl font-bold text-white">
                  Verse
                </div>
              </div>
              
              <p className="text-slate-400 leading-relaxed max-w-md">
                Connect with real people to learn languages through culture. Build friendships, 
                share experiences, and discover the world one conversation at a time.
              </p>

              {/* Popular Languages */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                  Popular Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, index) => (
                    <button
                      key={index}
                      className="flex items-center space-x-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-200 hover:scale-105 group"
                    >
                      <span className="text-sm group-hover:scale-110 transition-transform">
                        {lang.flag}
                      </span>
                      <span className="text-sm text-slate-300 group-hover:text-white">
                        {lang.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Community</h3>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Company Links */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">Support</h3>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mb-12 p-8 bg-slate-800 dark:bg-slate-900/50 rounded-2xl border border-slate-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/5"></div>
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Stay Connected
              </h3>
              <p className="text-slate-400 mb-6">
                Get weekly cultural insights, language tips, and community highlights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/10 rounded-full"></div>
            <div className="absolute bottom-4 right-12 w-8 h-8 bg-purple-500/10 rounded-full"></div>
          </div>

          {/* Social & Stats Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'Twitter', color: 'hover:bg-blue-500' },
                  { name: 'Instagram', color: 'hover:bg-pink-500' },
                  { name: 'LinkedIn', color: 'hover:bg-blue-600' },
                  { name: 'YouTube', color: 'hover:bg-red-500' },
                  { name: 'TikTok', color: 'hover:bg-black' }
                ].map((social) => (
                  <button
                    key={social.name}
                    className={`w-12 h-12 bg-slate-800 hover:bg-slate-700 ${social.color} rounded-xl transition-all duration-200 hover:scale-110 hover:shadow-lg flex items-center justify-center group`}
                  >
                    <div className="w-5 h-5 bg-slate-400 group-hover:bg-white rounded-sm"></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Stats */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold">Live Community</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-green-400">1,247</div>
                  <div className="text-sm text-slate-400">Online Now</div>
                </div>
                <div className="bg-slate-800 p-4 rounded-xl">
                  <div className="text-2xl font-bold text-blue-400">89K</div>
                  <div className="text-sm text-slate-400">Conversations Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-slate-800 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-slate-400 text-sm">
            © 2025 Verse. Made with ❤️ for language learners worldwide.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <button className="text-slate-400 hover:text-white transition-colors">
              🌐 English
            </button>
            <div className="flex items-center space-x-2 text-slate-500">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </>
    )
}