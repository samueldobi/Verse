"use client";
import { MessageCircle, Globe, HeartHandshake } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const features = [
  {
    icon: MessageCircle,
    title: "Real Conversations",
    desc: "Practice with native speakers who share their culture and daily experiences",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Globe,
    title: "Cultural Learning",
    desc: "Discover traditions, customs, and local insights that textbooks can't teach",
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: HeartHandshake,
    title: "Global Friendships",
    desc: "Build meaningful connections that last beyond your language learning journey",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
];

export default function Features() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className="px-6 py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`text-center space-y-4 p-8 rounded-2xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms`, transitionDuration: "500ms" }}
            >
              <div
                className={`w-16 h-16 ${f.iconBg} rounded-2xl flex items-center justify-center mx-auto`}
              >
                <f.icon className={`w-8 h-8 ${f.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{f.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
