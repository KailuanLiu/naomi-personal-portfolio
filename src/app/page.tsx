"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProjectCard from "@/components/ProjectCard";
import Contact from "@/components/Contact";
import { useState } from "react";

export default function Home() {
  const tabs = ["about", "experience", "projects", "posts", "contact"];
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-700">
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="relative h-64 rounded-3xl overflow-hidden">
          <Image
            src="/ocean-banner.jpg"
            alt="ocean banner"
            fill
            className="object-cover"
          />
        </div>

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
            <div className="rounded-3xl bg-white p-5 shadow relative">
              <div className="flex justify-center mb-4">
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

              <div className="text-center">
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

          <main className="min-w-0 space-y-6">
            <div id="about" className="scroll-mt-28">
              <About />
            </div>

            <div id = "projects" className = "scroll-mt-28">
              <h2 className = "mb-5 text-2xl font-bold text-neutral-700"> 
                :: Projects
              </h2>
              {/* CURRENT */}
              <h3 className = "mb-3 text-lg font-semibold text-neutral-700">
                Current
              </h3>
              <div className = "w-full overflow-hidden">
                <div className = "flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory">

                    <div className="w-[350px] flex-shrink-0 snap-start">
                      <a href="https://habitat-for-humanity.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <ProjectCard
                          title="UberShift: Employee Scheduling App"
                          organization="Cal Poly Technology Services"
                          image="/UberShifts.png"
                          technologies={["Go", "Slack API", "Microsoft Azure"]}
                          date = "Jan. 2026 - June. 2026"
                          description="filler text"
                        />
                      </a>
                    </div>

                    <div className="w-[350px] flex-shrink-0 snap-start">
                      <a href="https://habitat-for-humanity.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <ProjectCard
                          title="Event Volunteer Manager"
                          organization="Much Hope Foundation"
                          image="/muchhopelogo.png"
                          technologies={["Node.js", "React", "Express", "MongoDB", "Clerk", "Tailwind CSS"]}
                          date = "Jan. 2026 - June. 2026"
                          description="filler text"
                        />
                      </a>
                    </div>
                    
                  </div>
              </div>
              {/* PAST */}
              <h3 className = "mb-3 text-lg font-semibold text-neutral-700">
                Past
              </h3>
              <div className = "w-full overflow-hidden">
                <div className = "flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory">
                    <div className="w-[350px] flex-shrink-0 snap-start">
                      <a href="https://habitat-for-humanity.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <ProjectCard
                          title="Donation Tracker"
                          organization="Habitat for Humanity"
                          image="/h4hlogo.jpeg"
                          technologies={["Node.js", "React", "Express", "MongoDB", "Clerk", "Tailwind CSS"]}
                          date = "Jan. 2025 - June. 2025"
                          description="filler text"
                        />
                      </a>
                    </div>

                    <div className="w-[350px] flex-shrink-0 snap-start">
                      <a href="https://github.com/keen-cp/assignment-5-2262-KailuanLiu" target="_blank" rel="noopener noreferrer">
                        <ProjectCard
                          title = "Programming Language Evaluator"
                          organization = "CSC 430: Programming Languages"
                          image = "/programming-languages.jpeg"
                          technologies = {["SML", "nexus"]}
                          date = "Feb. 2026 - Mar. 2026"
                          description = "filler text"
                        />
                      </a>
                    </div>

                    <div className="w-[350px] flex-shrink-0 snap-start">
                      <a href="https://github.com/keen-cp/assignment-5-2262-KailuanLiu" target="_blank" rel="noopener noreferrer">
                        <ProjectCard
                          title = "County Demographics Analysis Tool"
                          organization = "CSC 357: Systems Programming"
                          image = "/programming-languages.jpeg"
                          technologies = {["C"]}
                          date = "Oct. 2024 - Nov. 2024"
                          description = "filler text"
                        />
                      </a>
                    </div>
               </div>
              </div>
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