"use client";

import Navbar from "@/components/sections/navbar/default"
import Hero from "@/components/sections/hero/default"
import Stats from "@/components/sections/stats/default"
import FAQ from "@/components/sections/faq/default"
import Pricing from "@/components/sections/pricing/default"
import Footer from "@/components/sections/footer/default"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/50 via-transparent to-transparent" />
      <div className="relative z-20">
        <Navbar />
        <main className="container mx-auto pt-24 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Hero />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Pricing />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Stats />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <FAQ />
          </motion.div>
          
            <Footer />
          
        </main>
      </div>
    </div>
  );
}

