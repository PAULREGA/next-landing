'use client';

import React, { useState } from 'react';
import { ChevronRight, Sparkles, Code2, Zap, Palette } from 'lucide-react';

export default function LandingPageGuide() {
  const [activeTab, setActiveTab] = useState(0);

  const sections = [
    {
      title: "Project Setup",
      steps: [
        "npx create-next-app@latest my-landing --typescript --tailwind",
        "cd my-landing",
        "npm install lucide-react (for icons)",
        "Set up folder structure: app/, components/, public/"
      ]
    },
    {
      title: "Key Components",
      steps: [
        "Hero Section - Large headline, CTA buttons, background gradients",
        "Features Grid - Icon + description cards in responsive grid",
        "Pricing/Plans - Comparison cards with features",
        "Testimonials - Rotating sponsor/client section",
        "CTA Section - Final call-to-action with social links"
      ]
    },
    {
      title: "Design Elements",
      steps: [
        "Gradient backgrounds - Use Tailwind's gradient utilities",
        "Animated elements - Framer Motion for smooth transitions",
        "Dark mode - next-themes package for theme switching",
        "Responsive design - Mobile-first Tailwind classes",
        "Typography - Font optimization with next/font"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Next.js Landing
          </h1>
          <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-b from-blue-600/10 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Build Amazing
            <span className="block bg-linear-to-r from-blue-400 via-purple-400 to-yellow-400 bg-clip-text text-transparent">
              Landing Pages
            </span>
          </h2>
          
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Create stunning, fast, and modern landing pages with Next.js, Tailwind CSS, and React components. Perfect for startups, SaaS products, and portfolios.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold flex items-center gap-2 transition transform hover:scale-105">
              Get Started <ChevronRight size={20} />
            </button>
            <button className="px-8 py-4 border-2 border-slate-600 hover:border-slate-400 rounded-lg font-semibold transition">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-4">Why Choose This Stack?</h3>
        <p className="text-slate-400 text-center mb-16 text-lg">Everything you need for a modern landing page</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: "Lightning Fast", desc: "Optimized performance with Next.js and static generation" },
            { icon: Palette, title: "Beautiful Design", desc: "Tailwind CSS for rapid, responsive styling" },
            { icon: Code2, title: "Easy to Build", desc: "Reusable React components for quick development" },
            { icon: Sparkles, title: "Modern Features", desc: "Built-in animations and dark mode support" },
            { icon: ChevronRight, title: "SEO Friendly", desc: "Server-side rendering for better search rankings" },
            { icon: Code2, title: "Developer Friendly", desc: "TypeScript support and hot reload development" }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-slate-900 rounded-lg border border-slate-800 hover:border-slate-600 transition">
              <item.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">How to Build It</h3>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {sections.map((section, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === i
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        <div className="bg-slate-900 p-8 rounded-lg border border-slate-800">
          <h4 className="text-2xl font-bold mb-6">{sections[activeTab].title}</h4>
          <ul className="space-y-4">
            {sections[activeTab].steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-blue-400 font-bold shrink-0">{i + 1}</span>
                <span className="text-slate-300">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold mb-8">Quick Example</h3>
        <div className="bg-slate-900 rounded-lg p-6 border border-slate-800 overflow-x-auto">
          <pre className="text-sm text-slate-300">
{`// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-6xl font-bold mb-6">
          <span className="bg-linear-to-r from-blue-400 
            to-purple-500 bg-clip-text text-transparent">
            Your Amazing Product
          </span>
        </h1>
        <button className="px-8 py-4 bg-blue-600 
          hover:bg-blue-700 rounded-lg font-bold">
          Get Started
        </button>
      </section>
    </main>
  )
}`}
          </pre>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-linear-to-r from-blue-600 to-red-800 text-center">
        <h3 className="text-4xl font-bold mb-4">Ready to Build?</h3>
        <p className="text-lg mb-8 opacity-90">Start creating your landing page today</p>
        <button className="px-8 py-4 bg-white text-blue-600 hover:bg-slate-100 rounded-lg font-bold transition transform hover:scale-105 disabled:opacity-50 disabled:pointer-events-none">
          Create Your Landing Page
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>Build something amazing with Next.js</p>
          <p className="mt-2 text-sm">© 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}