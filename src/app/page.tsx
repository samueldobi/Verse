import Hero from "./ui/home/hero";
import Features from "./ui/home/features";
import HowItWorks from "./ui/home/how-it-works";
import Testimonials from "./ui/home/testimonials";
import Cta from "./ui/home/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Cta />
    </div>
  );
}
