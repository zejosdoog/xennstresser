'use client';

import React, { useState } from 'react';
import { Zap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Account for fixed navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="font-sora fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 rounded-full bg-zinc-900/60 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-300">
            <div className="flex items-center justify-between py-2 px-6 lg:px-8">
                <a onClick={() => scrollToSection('home')} className="flex items-center gap-3 group cursor-pointer">
                    <span className="inline-flex items-center justify-center rounded-full p-1.5">
                        <Zap className="size-6 text-white" />
                    </span>
                    <span className="text-xl font-bold tracking-tight text-white md:block">
                        XennStress
                    </span>
                </a>

                <div className="flex items-center gap-6">
                    <ul className="hidden md:flex gap-6">
                        <li>
                            <a onClick={() => scrollToSection('home')} className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">Home</a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('features')} className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">Features</a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('pricing')} className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">Pricing</a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('faq')} className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">FAQ</a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('support')} className="text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer">Support</a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-3">
                    <a href="/signup">
                        <Button size="sm" className="bg-white text-black hover:bg-white/90 font-semibold shadow-lg rounded-full">
                            Get Started &rarr;
                        </Button>
                    </a>
                    <button onClick={toggleMenu} className="md:hidden text-white">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-full left-0 w-full rounded-2xl bg-zinc-900/90 backdrop-blur-md p-4 mt-2 border border-white/10 shadow-lg"
                    >
                        <ul className="flex flex-col gap-4">
                            <li>
                                <a onClick={() => scrollToSection('home')} className="text-white hover:text-zinc-200 transition-colors text-lg font-medium cursor-pointer">Home</a>
                            </li>
                            <li>
                                <a onClick={() => scrollToSection('features')} className="text-white hover:text-zinc-200 transition-colors text-lg font-medium cursor-pointer">Features</a>
                            </li>
                            <li>
                                <a onClick={() => scrollToSection('pricing')} className="text-white hover:text-zinc-200 transition-colors text-lg font-medium cursor-pointer">Pricing</a>
                            </li>
                            <li>
                                <a onClick={() => scrollToSection('faq')} className="text-white hover:text-zinc-200 transition-colors text-lg font-medium cursor-pointer">FAQ</a>
                            </li>
                            <li>
                                <a onClick={() => scrollToSection('support')} className="text-white hover:text-zinc-200 transition-colors text-lg font-medium cursor-pointer">Support</a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
