"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { useState } from "react";

export default function Home() {
  const tabs = ["about", "experience", "projects", "posts", "contact"];
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-700">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="h-64 rounded-3xl bg-neutral-300" />

        <div className="mt-4 rounded-2xl bg-white px-6 py-3 shadow">
          <div className="flex justify-center gap-6 text-sm font-semibold uppercase tracking-wide text-neutral-500">
            {tabs.map((tab) => (
              <a
                key={tab}
                href={`#${tab}`}
                onClick={() => setActive(tab)}
                className={`pb-1 hover:text-neutral-700 ${
                  active === tab ? "border-b-2 border-neutral-700 text-neutral-700" : ""
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </a>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6 mt-6">
          <aside className="space-y-6">
            <div className="rounded-3xl bg-white p-5 pt-24 shadow relative">
              <div className="absolute left-1/2 -top-16 -translate-x-1/2">
                <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow">
                  <Image
                    src="/web-profilepicture.JPEG"
                    alt="Profile Picture"
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-24 text-center">
                <h2 className="text-lg font-bold text-neutral-700">Naomi Liu</h2>
                <p className="text-sm text-neutral-500">@kailuanliu</p>
              </div>

              <div className="mt-4 space-y-2 text-center text-sm text-neutral-600">
                <p className="text-sm text-neutral-800">
                  Computer Science Major • Research Assistant • Cal Poly Scholar • Artist
                </p>
                <p>Interested in software engineering and web development</p>
                <p className="mt-2 text-xs text-neutral-400">
                  San Luis Obispo • El Monte
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow">
              <div className="mb-3 h-5 w-28 rounded bg-neutral-300" />
              <div className="space-y-2">
                <div className="h-3 rounded bg-neutral-200" />
                <div className="h-3 rounded bg-neutral-200" />
                <div className="h-3 w-5/6 rounded bg-neutral-200" />
              </div>
            </div>

            {/* <div className="rounded-3xl bg-white p-5 shadow">
              <div className="mb-4 h-5 w-24 rounded bg-neutral-300" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-neutral-300" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-3/4 rounded bg-neutral-200" />
                      <div className="h-3 w-1/2 rounded bg-neutral-200" />
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </aside>

          <main className="space-y-6">
            <div id="about" className="scroll-mt-28">
              <About />
            </div>

            {/* <div id="posts" className="scroll-mt-28">
              <div className="space-y-4 rounded-3xl bg-white p-6 shadow">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-16 w-16 rounded-lg bg-neutral-300" />
                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-1/3 rounded bg-neutral-300" />
                      <div className="h-3 rounded bg-neutral-200" />
                      <div className="h-3 w-2/3 rounded bg-neutral-200" />
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            <div id="experience" className="scroll-mt-28">
              <Experience />
            </div>

            <div id="contact" className="scroll-mt-28">
              <Contact />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}