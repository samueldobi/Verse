"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="px-6 py-24 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-slate-900 dark:bg-slate-800 rounded-3xl p-12 md:p-16 shadow-xl border border-slate-200 dark:border-slate-700">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Language Journey?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto">
            Join thousands of learners already connecting through culture and conversation.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-lg"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
