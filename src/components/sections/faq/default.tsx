import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQData = [
  {
    question: "Can this break my website?",
    answer: "xenstresser.su is built for users of all experience levels. No need for deep technical knowledge — just choose your website, configure a few intuitive options, and launch a performance scenario in seconds."
  },
  {
    question: "Can I try it out before buying?",
    answer: "No worries. Our platform features a beginner-friendly interface with clearly explained settings and smart presets. You get enterprise-level testing capabilities with zero complexity."
  },
  {
    question: "How much load can be simulated?",
    answer: "Whether you're scaling a new project or validating an existing system, Breach.su helps you simulate demanding usage conditions through a clean, intuitive interface that works out of the box."
  },
  {
    question: "What if my site uses protection services?",
    answer: "If your site uses protection services like Cloudflare or other firewalls, we recommend you configure your firewall to allow our traffic."
  },
  {
    question: "What is stress testing and why should I care?",
    answer: "Stress testing is a type of performance testing that evaluates a system or component at or beyond the limits of its specified requirements to determine the behavior of the system under a heavy load."
  },
];

export default function FAQ() {
  return (
    <section className="font-sora py-24" id="faq">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-8">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">FAQ</h2>
          <h3 className="text-xl text-zinc-400 mb-8">Frequently Asked Questions</h3>
          <p className="text-zinc-400">
            Breach.su is built for users of all experience levels. No need for deep technical knowledge — just choose your website, configure a few intuitive options, and launch a performance scenario in seconds.
          </p>
          <p className="text-zinc-400 mt-4">
            No worries. Our platform features a beginner-friendly interface with clearly explained settings and smart presets. You get enterprise-level testing capabilities with zero complexity.
          </p>
          <p className="text-zinc-400 mt-4">
            Whether you're scaling a new project or validating an existing system, Breach.su helps you simulate demanding usage conditions through a clean, intuitive interface that works out of the box.
          </p>
          <div className="mt-8 flex items-center gap-4"></div>
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-zinc-800 rounded-lg bg-zinc-900/50 p-4">
                <AccordionTrigger className="text-left text-white text-lg font-semibold">{item.question}</AccordionTrigger>
                <AccordionContent className="pt-2 text-zinc-400">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
