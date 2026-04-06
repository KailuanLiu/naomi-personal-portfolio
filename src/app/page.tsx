"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import About from "@/components/About/About";
import Experience from "@/components/Experience";
import ProjectCard from "@/components/ProjectCard";
import Education from "@/components/Education/Education";
// import Contact from "@/components/Contact";
import { useState } from "react";

export default function Home() {
  // const tabs = ["about", "experience", "projects", "contact"];
  const tabs = ["about", "experience", "projects"];
  const [active, setActive] = useState(tabs[0]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-700">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="relative h-64 rounded-3xl">
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

              <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 space-y-2 text-center text-sm text-neutral-600">
                <p className="text-sm text-neutral-800">
                    Contacts </p>
                <p> kailuan1127@gmail.com </p>
                <p> kliu97@calpoly.edu </p>
                <p> 626-525-1021 </p>
              </div>
          </aside>

          <main className="min-w-0 space-y-6">
            
            <div id="about" className="scroll-mt-28">
              <About isLoggedIn = {isLoggedIn} />
            </div>

            <div id = "education" className = "mt-scroll-28">
                <Education isLoggedIn = {isLoggedIn} />
            </div>

            <div id = "projects" className = "scroll-mt-28">
              <h2 className = "mb-5 text-2xl font-bold text-neutral-700"> 
                :: projects
              </h2>

              {/* CURRENT */} 
              <h3 className = "mb-3 text-lg font-semibold text-neutral-700">
                current
              </h3>

              <div className = "w-full overflow-hidden">
                <div className = "flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory">

                    <div className="w-[350px] flex-shrink-0 snap-start">
                      <ProjectCard
                        title="UberShift: Employee Scheduling App"
                        organization="Cal Poly Technology Services"
                        image="/UberShifts.png"
                        technologies={["Go", "Slack API", "Microsoft Azure"]}
                        date = "March. 2026 - Present"
                        description="filler text"
                        link = ""
                        isLoggedIn = {isLoggedIn}
                        onSaveDescription = { async (newDesc) => {
                          await fetch ('/api/projects', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ title: "UberShift: Employee Scheduling App", description: newDesc }),
                          })
                        }}
                      />
                    </div>

                    <div className="w-[350px] flex-shrink-0 snap-start">
                      <ProjectCard
                        title="Event & Volunteer Manager"
                        organization="Much Hope Foundation"
                        image="/muchhopelogo.png"
                        technologies={["Node.js", "React", "Express", "MongoDB", "Clerk", "Tailwind CSS"]}
                        date = "Jan. 2026 - June. 2026"
                        description="filler text"
                        link = ""
                        isLoggedIn = {isLoggedIn}
                        onSaveDescription = { async (newDesc) => {
                          await fetch ('/api/projects', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ title: "Event & Volunteer Manager", description: newDesc }),
                          })
                        }}
                      />
                    </div>
                    
                  </div>
              </div>
              {/* PAST */}
              <h3 className = "mb-3 text-lg font-semibold text-neutral-700">
                past
              </h3>
              <div className = "w-full overflow-hidden">
                <div className = "flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory">
                    <div className="w-[350px] flex-shrink-0 snap-start">
                      <ProjectCard
                        title="Donation Tracker"
                        organization="Habitat for Humanity"
                        image="/h4hlogo.jpeg"
                        technologies={["Node.js", "React", "Express", "MongoDB", "Clerk", "Tailwind CSS"]}
                        date = "Jan. 2025 - June. 2025"
                        description="filler text"
                        link = ""
                        isLoggedIn = {isLoggedIn}
                        onSaveDescription = { async (newDesc) => {
                            await fetch ('/api/projects', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ title: "Donation Tracker", description: newDesc }),
                          })
                        }}
                      />
                    </div>
                        
               </div>
              </div>
          </div>

            <div id="experience" className="scroll-mt-28">
              <Experience />
            </div>

            {/* <div id="contact" className="scroll-mt-28">
              <Contact />
            </div> */}
          </main>
        </div>
      </div>
    </div>
  );
}