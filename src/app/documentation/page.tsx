'use client';

import React, { useState } from 'react';
import { Clipboard, RefreshCw, FileText } from "lucide-react";

export default function DocumentationPage() {
  const [apiKey, setApiKey] = useState('d34d3d3d-c0d3-4d33-a25e-3d3a4d33c0d3');
  const [copyMessage, setCopyMessage] = useState('');

  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = apiKey;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopyMessage('Copied!');
    setTimeout(() => setCopyMessage(''), 2000);
  };

  const generateNewKey = () => {
    const newKey = 'xxxx-xxxx-xxxx-xxxx'.replace(/x/g, () =>
      ((Math.random() * 16) | 0).toString(16)
    );
    setApiKey(newKey);
    setCopyMessage('New key generated!');
    setTimeout(() => setCopyMessage(''), 2000);
  };

  const methods = [
    { name: 'UDP', description: 'User Datagram Protocol' },
    { name: 'TCP', description: 'Transmission Control Protocol' },
    { name: 'HTTP', description: 'Hypertext Transfer Protocol' },
    { name: 'HTTPS', description: 'Hypertext Transfer Protocol Secure' },
  ];

  const parameters = [
    { name: 'host', type: 'string', required: true, description: 'Target IP address or hostname' },
    { name: 'port', type: 'integer', required: false, description: 'Target port number (defaults to 80)' },
    { name: 'duration', type: 'integer', required: true, description: 'Attack duration in seconds' },
    { name: 'method', type: 'string', required: true, description: 'Attack method (UDP, TCP, HTTP, HTTPS)' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 text-white flex font-sora p-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap');
        .font-sora {
          font-family: 'Sora', sans-serif;
        }
      `}</style>
      <div className="container mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">API Documentation</h1>
          <p className="text-lg text-zinc-400">Integrate with XENNSTRESSER via our API.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <FileText size={24} className="text-indigo-400" />
              <h2 className="text-xl font-semibold text-zinc-200">API Endpoint: `/api/attack`</h2>
            </div>
            <p className="text-sm text-zinc-400 mb-4">This endpoint is used to initiate a stress test attack.</p>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <pre className="text-sm text-zinc-300 overflow-x-auto">
                <code>
                  POST /api/attack<br />
                  &nbsp;&nbsp;Authorization: Bearer [API_KEY]<br />
                  &nbsp;&nbsp;Content-Type: application/json<br />
                  <br />
                  Body:<br />
                  &nbsp;&nbsp;{'{'}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;"host": "example.com",<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;"port": 80,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;"duration": 60,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;"method": "UDP"<br />
                  &nbsp;&nbsp;{'}'}
                </code>
              </pre>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-zinc-200">Available Methods</h3>
              <ul className="list-disc list-inside mt-2 text-zinc-400">
                {methods.map((method, index) => (
                  <li key={index} className="text-sm">
                    <strong>{method.name}:</strong> {method.description}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-zinc-200">Parameters</h3>
              <ul className="list-disc list-inside mt-2 text-zinc-400">
                {parameters.map((param, index) => (
                  <li key={index} className="text-sm">
                    <strong>{param.name}</strong> ({param.type}, {param.required ? 'required' : 'optional'}): {param.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 shadow-lg h-fit">
            <div className="flex items-center gap-3 mb-4">
              <FileText size={24} className="text-indigo-400" />
              <h2 className="text-xl font-semibold text-zinc-200">API Key</h2>
            </div>
            <p className="text-sm text-zinc-400 mb-4">Your secret API key. Keep this safe and do not share it.</p>
            <div className="relative">
              <div className="bg-zinc-800 p-4 rounded-lg flex items-center justify-between gap-4">
                <code className="text-sm text-zinc-300 break-all">{apiKey}</code>
                <div className="flex items-center gap-2">
                  {copyMessage && (
                    <span className="text-xs text-green-400 transition-opacity duration-300">
                      {copyMessage}
                    </span>
                  )}
                  <button
                    onClick={copyToClipboard}
                    className="p-2 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors duration-200 text-zinc-400 hover:text-white"
                    title="Copy to clipboard"
                  >
                    <Clipboard size={16} />
                  </button>
                  <button
                    onClick={generateNewKey}
                    className="p-2 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors duration-200 text-zinc-400 hover:text-white"
                    title="Generate new key"
                  >
                    <RefreshCw size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
