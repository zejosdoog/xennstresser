'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="font-sora min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/50 via-transparent to-transparent" />

      <div className="relative z-20 w-full max-w-md p-8 rounded-xl bg-zinc-900/60 backdrop-blur-md border border-white/10 shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-2">Login to XENNSTRESSER.SU</h2>
        <p className="text-zinc-400 text-center mb-8">Enter your credentials to continue</p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2" htmlFor="email-username">Email or Username</label>
            <input
              type="text"
              id="email-username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2" htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-zinc-400">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="form-checkbox h-4 w-4 text-indigo-500 bg-zinc-800 border-zinc-600 rounded"
              />
              Remember me
            </label>
            <a href="#" className="text-indigo-400 hover:text-indigo-300">Forgot password?</a>
          </div>

          <Button type="submit" className="w-full bg-white text-black hover:bg-white/90 font-semibold shadow-lg rounded-full py-2">
            Login
          </Button>

          <p className="text-center text-sm text-zinc-400">
            Don't have an account?{' '}
            <a href="/signup" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
