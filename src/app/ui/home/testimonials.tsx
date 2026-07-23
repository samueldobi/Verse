"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import { useReveal } from "@/hooks/use-reveal";

const testimonials = [
  {
    name: "Chidi O.",
    avatar: "https://i.pravatar.cc/80?img=12",
    role: "Learning Japanese",
    text: "I've tried many language apps, but nothing compares to real conversations. I've made a genuine friend in Tokyo!",
    rating: 5,
  },
  {
    name: "Ngozi A.",
    avatar: "https://i.pravatar.cc/80?img=20",
    role: "Learning Portuguese",
    text: "My buddy from São Paulo taught me more about Brazilian culture in a month than any textbook could.",
    rating: 5,
  },
  {
    name: "Tunde B.",
    avatar: "https://i.pravatar.cc/80?img=53",
    role: "Learning English",
    text: "Verse helped me gain confidence speaking English. My partner is patient and we talk about everything!",
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="px-6 py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What Our Learners Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Real stories from real language exchanges
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-center gap-2 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
