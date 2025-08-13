import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section id="home" className="font-sora flex flex-col items-center justify-center text-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="bg-yellow-400 text-black px-4 py-2 rounded-lg mb-8 text-sm font-medium">
        This site is still under development. Stay tuned for more updates.
      </div>
      <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-sm font-medium text-white rounded-full bg-zinc-900/60 backdrop-blur-md border border-white/10 shadow-lg">
        Introducing IP Stresser
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
        Load Testing, Evolved
        <span className="block text-2xl sm:text-3xl md:text-5xl mt-3">
          Accurate Outcomes, Effortlessly
        </span>
      </h1>
      <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
        Simulate real user traffic with production-level accuracy in just a few clicks
      </p>
      <div className="mt-6 flex items-center justify-center gap-4">
        <Button
          size="lg"
          className="bg-white text-black hover:bg-white/90 font-semibold shadow-lg rounded-full px-8 py-3"
        >
          Get Started →
        </Button>
      </div>
    </section>
  );
}
