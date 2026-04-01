"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { useState } from "react";

export default function Home() {
  const tabs = ["about", "experience", "projects", "posts", "contact"];
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-700">
      
      {/* NAVBAR */}
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-6">
        
        {/* BANNER */}
        <div className="h-64 bg-neutral-300 rounded-3xl" />
        
        <div className="mt-4 rounded-2xl bg-white shadow px-6 py-3">
          <div className = "flex justify-center gap-6 text-sm font-semibold uppercase tracking-wide text-neutral-500">
            {tabs.map((tab) => (
              <a
                key={tab}
                href={`#${tab}`}
                onClick = {() => setActive(tab)}
                className={`pb-1 hover:text-neutral-700 ${
                  active === tab ? "border-b-2 border-neutral-700" : ""
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </a>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6 mt-6">
          
          {/* LEFT SIDEBAR */}
          <aside className="space-y-6">
            
            {/* PROFILE */}
            <div className="bg-white rounded-3xl p-5 shadow relative">
              <div className="absolute -top-16 left-1/2 -translate-x-1/2">
                <div className = "w-40 h-40 rounded-full border-4 border-white shadow overflow-hidden">
                  <Image
                    src="/web-profilepicture.JPEG"
                    alt="Profile Picture"
                    width={150}
                    height={150}
                  />
                </div>
              </div>

              <div className="mt-24 text-center">
                <h2 className = "text-lg font-bold text-neutral-700"> Naomi Liu </h2>
                <p className = "text-sm text-neutral-500"> @kailuanliu </p>
              </div>

              <div className = "mt-4 text-sm text-neutral-600 text-center space-y-2">
                <p className = "text-neutral-1000 text-sm"> Computer Science Major • Research Assistant • Cal Poly Scholar • Artist  </p>
                <p> Interested in software engineering and web development </p>
                <p className = "text-xs text-neutral-400 mt-2"> San Luis Obispo • El Monte </p>
            </div>
          </div>

            {/* ABOUT ME */}
            <div className="bg-white rounded-3xl p-5 shadow">
              <div className="h-5 w-28 bg-neutral-300 rounded mb-3" />
              <div className="space-y-2">
                <div className="h-3 bg-neutral-200 rounded" />
                <div className="h-3 bg-neutral-200 rounded" />
                <div className="h-3 w-5/6 bg-neutral-200 rounded" />
              </div>
            </div>

            {/* PROJECTS */}
            <div className="bg-white rounded-3xl p-5 shadow">
              <div className="h-5 w-24 bg-neutral-300 rounded mb-4" />

              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <div className="w-10 h-10 bg-neutral-300 rounded-lg" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-3/4 bg-neutral-200 rounded" />
                      <div className="h-3 w-1/2 bg-neutral-200 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <main className="space-y-6">

            <div id = "about" className = "scroll-mt-20">
              <About />
            </div>    

            {/* CONTENT LIST */}
            <div className="bg-white rounded-3xl p-6 shadow space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-16 h-16 bg-neutral-300 rounded-lg" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-1/3 bg-neutral-300 rounded" />
                    <div className="h-3 bg-neutral-200 rounded" />
                    <div className="h-3 w-2/3 bg-neutral-200 rounded" />
                  </div>
                </div>
              ))}
            </div>
        
        {/* CONTACT */}
        <div id = "contact" className = "scroll-mt-28">
          <Contact />
        </div>

          </main>
        </div>
      </div>
    </div>
  );
}