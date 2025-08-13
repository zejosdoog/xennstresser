"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const pricingData = [
  {
    plan: "Basic",
    usd: "20",
    php: "1100",
    description: "Basic plan for testing your website",
    features: [
      "1 parallel test",
      "120 seconds test duration",
      "Primary Support",
      "Unlimited tests",
      "VIP Access",
      "API Access"
    ]
  },
  {
    plan: "Business",
    usd: "140",
    php: "7700",
    description: "Business plan for testing your website",
    features: [
      "7 parallel tests",
      "1000 seconds test duration",
      "Primary Support",
      "Unlimited tests",
      "VIP Access",
      "API Access"
    ]
  },
  {
    plan: "Obsidian",
    usd: "500",
    php: "27500",
    description: "Obsidian plan for testing your website",
    features: [
      "35 parallel tests",
      "10000 seconds test duration",
      "Primary Support",
      "Unlimited tests",
      "VIP Access",
      "API Access"
    ]
  }
];

export default function Pricing() {
  const [currency, setCurrency] = useState("usd");

  const toggleCurrency = () => {
    setCurrency(currency === "usd" ? "php" : "usd");
  };

  return (
    <section className="py-20 font-sora" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-white">Pricing</h2>
        <p className="text-lg sm:text-xl text-zinc-400 mb-8">
          Choose the plan that fits your needs and start testing your resources today.
        </p>

        <div className="flex justify-center mb-12">
          <button
            onClick={toggleCurrency}
            className="flex items-center gap-2 rounded-full border border-white/10 p-1 bg-zinc-900"
          >
            <div
              className={`px-4 py-2 rounded-full transition-colors ${
                currency === "usd" ? "bg-white text-black" : "text-zinc-400"
              }`}
            >
              USD
            </div>
            <div
              className={`px-4 py-2 rounded-full transition-colors ${
                currency === "php" ? "bg-white text-black" : "text-zinc-400"
              }`}
            >
              PHP
            </div>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((plan, index) => (
            <div
              key={index}
              className={`relative p-6 sm:p-8 rounded-xl border ${
                index === 1 ? "border-white/10 ring-2 ring-white" : "border-white/10"
              } bg-zinc-900/50 flex flex-col justify-between`}
            >
              <div>
                <h3 className="text-2xl font-semibold text-white">{plan.plan}</h3>
                <p className="text-zinc-400 mt-2">
                  <span className="text-4xl font-bold text-white">
                    {currency === "usd" ? `$${plan.usd}` : `₱${plan.php}`}
                  </span>
                  <span className="text-sm"> / Per Month</span>
                </p>
                <p className="text-zinc-400 mt-4">{plan.description}</p>
              </div>

              <div className="mt-6">
                <Button
                  size="lg"
                  className="w-full rounded-full bg-white text-black hover:bg-white/90 font-semibold"
                >
                  Try this Plan
                </Button>
                <p className="text-xs text-zinc-400 mt-2">Billed monthly.</p>
              </div>

              <div className="mt-8 text-left">
                <h4 className="text-sm font-semibold mb-4 text-white">Features</h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-zinc-400">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
