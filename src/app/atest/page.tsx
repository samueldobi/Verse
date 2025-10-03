"use client";
import React, { useState, useEffect, useRef } from 'react';

const SchoolPlatform = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Innovative navigation with floating design
  const Navigation = () => {
    const isScrolled = scrollY > 100;
    
    return (
      <nav className={`fixed w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Dynamic logo with animated elements */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-[#1AA939] rounded-2xl transform rotate-12 animate-pulse"></div>
                <div className="absolute inset-1 w-10 h-10 bg-blue-500 rounded-xl transform -rotate-12 opacity-80"></div>
                <div className="absolute inset-2 w-8 h-8 bg-white rounded-lg transform rotate-45"></div>
              </div>
              <div>
                <span className="text-3xl font-black text-gray-900">EduCore</span>
                <div className="h-1 w-full bg-[#1AA939] rounded-full"></div>
              </div>
            </div>
            
            {/* Floating menu items */}
            <div className="hidden md:flex items-center space-x-2">
              {['Home', 'About', 'Process', 'Features', 'FAQ'].map((item, index) => (
                <button
                  key={item}
                  className="relative px-8 py-4 text-gray-700 hover:text-[#1AA939] font-semibold transition-all duration-300 group"
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 bg-green-50 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-[#1AA939] group-hover:w-full transition-all duration-300 rounded-full"></div>
                </button>
              ))}
            </div>
            
            {/* Unique CTA button */}
            <div className="relative group">
              <button className="bg-[#1AA939] hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1">
                Get Started
              </button>
              <div className="absolute inset-0 bg-[#1AA939] rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 scale-110"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  // Revolutionary hero section with clean white background
  const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-6 bg-[#1AA939] rounded-full blur-2xl opacity-20 transform rotate-45"></div>
      </div>
      
      {/* Floating dots pattern */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-[#1AA939]' : i % 3 === 1 ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              opacity: 0.6
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <div className="inline-block mb-6 px-6 py-3 bg-green-50 rounded-full border border-green-100">
            <span className="text-[#1AA939] font-bold text-sm uppercase tracking-wider">
              🚀 The Future is Here
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight">
            <div className="relative inline-block">
              <span className="text-gray-900">Transform</span>
              <div className="absolute -bottom-4 left-0 w-full h-4 bg-[#1AA939] opacity-20 rounded-full transform -skew-x-12"></div>
            </div>
            <br />
            <span className="text-[#1AA939] relative">
              Education
              <div className="absolute -top-2 -right-6 w-12 h-12 bg-blue-100 rounded-full animate-bounce"></div>
            </span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
          Revolutionize your institution with an intelligent platform designed for the modern educational ecosystem. 
          <span className="text-[#1AA939] font-semibold"> Experience the difference.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group relative bg-[#1AA939] hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2">
            <span className="relative z-10">Start Your Journey</span>
            <div className="absolute inset-0 bg-[#1AA939] rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-300 scale-110"></div>
          </button>
          
          <button className="group bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-1">
            <span className="flex items-center gap-3">
              Watch Demo
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            </span>
          </button>
        </div>

        {/* Scroll indicator with unique design */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center space-y-3 animate-bounce">
            <span className="text-sm text-gray-400 font-medium">Explore More</span>
            <div className="w-8 h-12 border-2 border-gray-300 rounded-full flex justify-center relative overflow-hidden">
              <div className="w-1 h-4 bg-[#1AA939] rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Who we are section with card animations
  const WhoWeAreSection = () => (
    <section className="py-32 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <div className="inline-block mb-6 px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100">
            <span className="text-[#1AA939] font-bold text-sm uppercase tracking-wider">About EduCore</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
            We Are <span className="text-[#1AA939] relative">
              Innovation
              <div className="absolute -bottom-3 left-0 w-full h-2 bg-blue-200 opacity-50 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Born from the vision of revolutionizing education through technology, we craft experiences that transcend traditional boundaries and empower every learner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Visionary",
              desc: "We see beyond today's limitations to tomorrow's possibilities in educational excellence",
              icon: "🎯",
              accent: "bg-green-100 border-green-200"
            },
            {
              title: "Innovative",
              desc: "Every solution is crafted with cutting-edge technology and deep human insight",
              icon: "💡",
              accent: "bg-blue-100 border-blue-200"
            },
            {
              title: "Transformative",
              desc: "We don't just digitize education; we reimagine it for the future generation",
              icon: "🚀",
              accent: "bg-purple-100 border-purple-200"
            }
          ].map((item, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#1AA939] transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 text-2xl ${item.accent} border-2`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1AA939] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                <div className="mt-6 w-0 h-1 bg-[#1AA939] group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Working process with innovative timeline
  const WorkingProcessSection = () => (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
            Our <span className="text-[#1AA939]">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A seamless journey from concept to transformation, designed with precision and care
          </p>
        </div>

        <div className="relative">
          {/* Animated connecting path */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gray-200 rounded-full">
            <div className="w-full h-1/5 bg-[#1AA939] rounded-full"></div>
          </div>
          
          {[
            { phase: "01", title: "Discovery", desc: "We dive deep into your institution's unique ecosystem and challenges", color: "bg-green-500" },
            { phase: "02", title: "Design", desc: "Crafting intuitive experiences tailored to your community's needs", color: "bg-blue-500" },
            { phase: "03", title: "Development", desc: "Building robust, scalable solutions with cutting-edge technology", color: "bg-purple-500" },
            { phase: "04", title: "Deployment", desc: "Seamless integration with comprehensive training and support", color: "bg-orange-500" },
            { phase: "05", title: "Evolution", desc: "Continuous improvement and feature enhancement based on real usage", color: "bg-pink-500" }
          ].map((item, index) => (
            <div key={index} className={`flex items-center mb-20 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-20' : 'pl-20'}`}>
                <div className="group relative">
                  <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-[#1AA939] hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mr-4 text-white font-black text-xl`}>
                        {item.phase}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#1AA939] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                  
                  {/* Timeline connector */}
                  <div className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white border-4 border-[#1AA939] rounded-full shadow-lg ${
                    index % 2 === 0 ? '-right-4' : '-left-4'
                  }`}>
                    <div className="w-full h-full bg-[#1AA939] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Why us section with stats
  const WhyUsSection = () => (
    <section className="py-32 bg-[#1AA939] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 border border-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `scale(${0.5 + Math.random() * 0.5})`
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Why Choose EduCore
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Join thousands of institutions already transforming education
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { stat: "10,000+", label: "Happy Students", icon: "🎓" },
            { stat: "500+", label: "Schools Transformed", icon: "🏫" },
            { stat: "99.9%", label: "Uptime Guarantee", icon: "⚡" },
            { stat: "24/7", label: "Expert Support", icon: "🚀" }
          ].map((item, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-2">
                <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-green-100 transition-colors">
                  {item.stat}
                </div>
                <div className="text-green-100 font-semibold text-lg">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // How to use section
  const HowToUseSection = () => (
    <section className="py-32 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
            Get Started in <span className="text-[#1AA939]">Minutes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, fast, and intuitive - exactly how technology should be
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              step: "1", 
              title: "Sign Up", 
              desc: "Create your account and set up your institution profile with our guided setup",
              icon: "✨",
              color: "border-green-200 hover:border-[#1AA939]"
            },
            { 
              step: "2", 
              title: "Customize", 
              desc: "Tailor the platform to match your school's unique requirements and branding",
              icon: "🎨",
              color: "border-blue-200 hover:border-blue-500"
            },
            { 
              step: "3", 
              title: "Launch", 
              desc: "Go live with comprehensive onboarding for all users and ongoing support",
              icon: "🚀",
              color: "border-purple-200 hover:border-purple-500"
            }
          ].map((item, index) => (
            <div key={index} className="group relative">
              <div className={`bg-white rounded-3xl p-8 border-2 ${item.color} transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-translate-y-2`}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center font-black text-xl mr-4">
                    {item.step}
                  </div>
                  <div className="text-3xl">{item.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#1AA939] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Key features grid
  const KeyFeaturesSection = () => (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
            Powerful <span className="text-[#1AA939]">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your educational institution effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { feature: "Smart Analytics", icon: "📊", desc: "Data-driven insights" },
            { feature: "Student Management", icon: "👥", desc: "Complete profiles" },
            { feature: "Course Builder", icon: "📚", desc: "Intuitive creation" },
            { feature: "Communication Hub", icon: "💬", desc: "Seamless messaging" },
            { feature: "Performance Tracking", icon: "📈", desc: "Real-time monitoring" },
            { feature: "Security First", icon: "🔒", desc: "Enterprise grade" },
            { feature: "Mobile Ready", icon: "📱", desc: "Anywhere access" },
            { feature: "Cloud Native", icon: "☁️", desc: "Always available" },
            { feature: "AI Powered", icon: "🤖", desc: "Smart automation" }
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 hover:bg-white border border-gray-200 hover:border-[#1AA939] rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl transform group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 group-hover:text-[#1AA939] transition-colors">
                      {item.feature}
                    </div>
                    <div className="text-sm text-gray-500">{item.desc}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // FAQ section
  const FAQSection = () => {
    const [openFAQ, setOpenFAQ] = useState(null);
    
    const faqs = [
      { q: "How quickly can we get started?", a: "Implementation typically takes 2-4 weeks depending on your requirements and institutional size." },
      { q: "Is comprehensive training provided?", a: "Yes, we provide extensive training for administrators, teachers, and students with ongoing support." },
      { q: "How secure is our data?", a: "We use enterprise-grade security with end-to-end encryption and regular security audits." },
      { q: "Can it integrate with existing systems?", a: "Absolutely, our platform integrates seamlessly with most educational tools and management systems." },
      { q: "What support is available?", a: "24/7 technical support with dedicated success managers for each institution and comprehensive documentation." }
    ];

    return (
      <section className="py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
              <span className="text-[#1AA939]">FAQ</span>
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about EduCore
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 hover:border-[#1AA939] transition-colors duration-300 overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.q}</h3>
                    <div className={`flex-shrink-0 w-8 h-8 bg-[#1AA939] rounded-full flex items-center justify-center transform transition-transform duration-300 ${
                      openFAQ === index ? 'rotate-45' : ''
                    }`}>
                      <span className="text-white font-bold text-lg">+</span>
                    </div>
                  </div>
                </button>
                <div className={`transition-all duration-500 overflow-hidden ${
                  openFAQ === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Clean modern footer
  const Footer = () => (
    <footer className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="relative">
              <div className="w-12 h-12 bg-[#1AA939] rounded-2xl transform rotate-12"></div>
              <div className="absolute inset-1 w-10 h-10 bg-blue-500 rounded-xl transform -rotate-12 opacity-80"></div>
              <div className="absolute inset-2 w-8 h-8 bg-white rounded-lg transform rotate-45"></div>
            </div>
            <span className="text-3xl font-black">EduCore</span>
          </div>
          
          <p className="text-gray-400 mb-8 text-lg">
            Transforming education, one institution at a time.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            {['Privacy Policy', 'Terms of Service', 'Support Center', 'Contact Us'].map((link) => (
              <button key={link} className="text-gray-400 hover:text-white hover:text-[#1AA939] transition-colors duration-300 font-medium">
                {link}
              </button>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500">
              © 2025 EduCore. Empowering educational excellence worldwide.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <WhoWeAreSection />
      <WorkingProcessSection />
      <WhyUsSection />
      <HowToUseSection />
      <KeyFeaturesSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default SchoolPlatform;