'use client';

import React, { useState } from 'react';
import { LayoutDashboard, Shield, FileText, BarChart2, PlusCircle, Wallet, Menu, X, User, Circle, LogOut } from "lucide-react";

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = [
    { name: "Dashboard", href: "#", icon: <LayoutDashboard size={20} /> },
    { name: "Attacks", href: "#", icon: <Shield size={20} /> },
    { name: "Documentation", href: "#", icon: <FileText size={20} /> },
  ];

  const sidebarBillingItems = [
    { name: "Plans", href: "#", icon: <BarChart2 size={20} /> },
    { name: "Deposit", href: "#", icon: <PlusCircle size={20} /> },
  ];

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 text-white flex font-sora">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap');
        .font-sora {
          font-family: 'Sora', sans-serif;
        }
      `}</style>

      <div
        className={`fixed inset-y-0 left-0 z-50 bg-zinc-900 w-64 p-6 transition-transform duration-300 md:hidden border-r border-zinc-800 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center rounded-full p-1.5 bg-indigo-600/20">
              <Shield className="size-6 text-indigo-400" />
            </span>
            <span className="text-xl font-bold tracking-tight text-white">XENNSTRESSER</span>
          </div>
          <button onClick={toggleSidebar} className="text-zinc-400 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-md bg-zinc-800/50 mb-6">
            <div className="relative w-10 h-10">
                <Circle size={40} className="text-zinc-700" />
                <User size={24} className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-400" />
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-medium text-white">null@gmail.com</span>
                <span className="text-xs text-zinc-500">Balance: $0.00</span>
            </div>
        </div>
        <nav className="flex-1">
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Main</h3>
          <ul className="space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-md text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-200"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
          
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mt-6 mb-2">Billing</h3>
          <ul className="space-y-1">
            {sidebarBillingItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-md text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-200"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 rounded-md text-red-400 bg-zinc-800 mt-6 hover:bg-red-900/50 transition-all duration-200"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>

      <div className="hidden md:flex w-64 bg-zinc-900 border-r border-zinc-800 p-6 flex-col">
        <div className="flex items-center gap-2 mb-8">
          <span className="inline-flex items-center justify-center rounded-full p-1.5 bg-indigo-600/20">
            <Shield className="size-6 text-indigo-400" />
          </span>
          <span className="text-xl font-bold tracking-tight text-white">XENNSTRESSER</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-md bg-zinc-800/50 mb-6">
            <div className="relative w-10 h-10">
                <Circle size={40} className="text-zinc-700" />
                <User size={24} className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-400" />
            </div>
            <div className="flex flex-col">
                <span className="text-sm font-medium text-white">null@gmail.com</span>
                <span className="text-xs text-zinc-500">Balance: $0.00</span>
            </div>
        </div>
        
        <nav className="flex-1">
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Main</h3>
          <ul className="space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-md text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-200"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
          
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mt-6 mb-2">Billing</h3>
          <ul className="space-y-1">
            {sidebarBillingItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 p-3 rounded-md text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-200"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 p-3 rounded-md text-red-400 bg-zinc-800 mt-6 hover:bg-red-900/50 transition-all duration-200"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>

      <div className="flex-1 p-8 relative overflow-hidden">
        <div className={`md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 block' : 'opacity-0 hidden'}`} onClick={toggleSidebar} />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/50 via-transparent to-transparent" />
        
        <div className="relative z-20">
          <header className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <button onClick={toggleSidebar} className="md:hidden text-white">
              <Menu size={24} />
            </button>
          </header>

          <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg hover:bg-zinc-800 hover:scale-[1.02] transition-all duration-300">
              <h2 className="text-lg font-semibold mb-1 text-zinc-200">Total Users</h2>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-bold text-white">0</span>
                <span className="text-green-400 flex items-center text-sm">
                  <BarChart2 size={16} className="mr-1" /> +0%
                </span>
              </div>
              <p className="text-sm text-zinc-400 mt-2">More than yesterday</p>
              <p className="text-xs text-zinc-500">Users for the whole time</p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg hover:bg-zinc-800 hover:scale-[1.02] transition-all duration-300">
              <h2 className="text-lg font-semibold mb-1 text-zinc-200">Total Attacks</h2>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-bold text-white">0</span>
                <span className="text-green-400 flex items-center text-sm">
                  <BarChart2 size={16} className="mr-1" /> +100%
                </span>
              </div>
              <p className="text-sm text-zinc-400 mt-2">More than yesterday</p>
              <p className="text-xs text-zinc-500">Attacks for the whole time</p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg hover:bg-zinc-800 hover:scale-[1.02] transition-all duration-300">
              <h2 className="text-lg font-semibold mb-1 text-zinc-200">Running Attacks</h2>
              <div className="flex items-end justify-between">
                <span className="text-4xl font-bold text-white">0</span>
                <span className="text-red-400 flex items-center text-sm">
                  <BarChart2 size={16} className="mr-1 transform rotate-180" />
                </span>
              </div>
              <p className="text-sm text-zinc-400 mt-2">Used out of 1,250 slots</p>
              <p className="text-xs text-zinc-500">Attacks that are currently running</p>
            </div>

            <div className="md:col-span-2 bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg transition-all duration-300">
              <h2 className="text-lg font-semibold mb-4 text-zinc-200">Announcements</h2>
              <p className="text-sm text-zinc-400">News and updates of the project.</p>
              <div className="mt-4 p-4 rounded-lg bg-zinc-800 border border-zinc-700">
                <p className="text-sm text-zinc-200">
                  <span className="font-semibold text-zinc-400">New xennstresser</span>
                  <span className="text-zinc-500"> 27 July, 20:09</span>
                </p>
                <p className="text-zinc-400 mt-2">Hello, our old domain xennstresser.su got suspended. New domain lists breach.su. xennstresser.st</p>
                <p className="text-zinc-500 mt-4 text-xs">If you need help contact from telegram.</p>
              </div>
            </div>
            
            <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg transition-all duration-300">
              <h2 className="text-lg font-semibold mb-4 text-zinc-200">Information</h2>
              <p className="text-sm text-zinc-400 mb-4">Summary of your current plan.</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 text-zinc-400"><FileText size={16} /> Plan</span>
                  <span className="text-zinc-200">Free</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 text-zinc-400"><Shield size={16} /> Concurrences</span>
                  <span className="text-zinc-200">0 attacks</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 text-zinc-400"><LayoutDashboard size={16} /> Attack time</span>
                  <span className="text-zinc-200">0 sec.</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 text-zinc-400"><BarChart2 size={16} /> VIP Access</span>
                  <span className="text-red-400">No</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 text-zinc-400"><FileText size={16} /> API Access</span>
                  <span className="text-red-400">No</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 text-zinc-400"><Wallet size={16} /> Expire</span>
                  <span className="text-zinc-200">1 January 1970, 01:00</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
