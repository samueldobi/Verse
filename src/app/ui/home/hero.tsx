"use client";
import Link from "next/link";
import Image from "next/image";
import { useTypewriter } from "@/hooks/use-typewriter";

const headline = "Learn Languages Through Culture, Not Just Grammar.";

const cards = [
  {
    img: "https://i.pravatar.cc/48?img=11",
    name: "Li",
    flag: "🇨🇳",
    lang: "Learning Mandarin",
    from: "with Li from Beijing",
    text: "Today I learned about the Mid-Autumn Festival and how families gather to appreciate the moon…",
    rotate: "-rotate-2",
  },
  {
    img: "https://i.pravatar.cc/48?img=25",
    name: "María",
    flag: "🇪🇸",
    lang: "Practicing Spanish",
    from: "with María from Barcelona",
    text: "¡Hola! Let's talk about tapas culture and how Spanish people socialize…",
    rotate: "rotate-1 ml-8",
  },
  {
    img: "https://i.pravatar.cc/48?img=60",
    name: "Antoine",
    flag: "🇫🇷",
    lang: "French Immersion",
    from: "with Antoine from Lyon",
    text: "Bonjour! Today we explore French café culture and the art of conversation…",
    rotate: "-rotate-1",
  },
];

export default function Hero() {
  const typewriterText = useTypewriter(headline, 45);

  return (
    <section className="px-6 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight min-h-[3em]">
                {typewriterText}
                <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                Verse connects you with real people to practice local and global languages,
                share daily cultural nuggets, and build friendships while you learn.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/learn">
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
                  Find My Language Buddy
                </button>
              </Link>
              {/* <button className="px-8 py-4 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Watch Demo
              </button> */}
            </div>

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

          <div className="relative">
            <div className="space-y-4">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className={`bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 ${card.rotate} hover:rotate-0 transition-all duration-500 animate-fade-slide`}
                  style={{ animationDelay: `${300 + i * 150}ms` }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Image
                      src={card.img}
                      alt={card.name}
                      width={48}
                      height={48}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {card.flag} {card.lang}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{card.from}</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300">&ldquo;{card.text}&rdquo;</p>
                </div>
              ))}
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
