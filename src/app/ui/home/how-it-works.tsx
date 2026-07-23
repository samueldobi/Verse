"use client";
import { UserPlus, Search, MessageCircle } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Profile",
    desc: "Tell us your native language and what you want to learn. Add your interests to find the perfect match.",
  },
  {
    number: "02",
    icon: Search,
    title: "Get Matched",
    desc: "Our system pairs you with native speakers who want to learn your language — a natural exchange.",
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "Start Chatting",
    desc: "Practice through real conversations about culture, daily life, and topics you both love.",
  },
];

export default function HowItWorks() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="px-6 py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Three simple steps to start your language exchange journey
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`relative bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(steps.indexOf(step)) * 200}ms` }}
            >
              <span className="text-5xl font-bold text-blue-100 dark:text-blue-900/30 absolute top-4 right-4 select-none">
                {step.number}
              </span>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-5">
                <step.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
