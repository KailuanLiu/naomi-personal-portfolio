"use client";

import Navbar from "@/components/Navbar";
import About from "@/components/About/About";
import Experience from "@/components/Experience";
import ProjectCard from "@/components/ProjectCard";
import Education from "@/components/Education/Education";
import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-700">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className="mx-auto max-w-7xl px-4 py-6">
        <Banner />

        <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
          <Sidebar />

          <main className="min-w-0 space-y-6">
            <div id="about" className="scroll-mt-28">
              <About isLoggedIn={isLoggedIn} />
            </div>

            <div id="education" className="scroll-mt-28">
              <Education isLoggedIn={isLoggedIn} />
            </div>

            <div id="projects" className="scroll-mt-28">
              <h2 className="mb-5 text-2xl font-bold text-neutral-700">
                :: projects
              </h2>

              <h3 className="mb-3 text-lg font-semibold text-neutral-700">
                current
              </h3>

              <div className="w-full overflow-hidden">
                <div className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory">
                  <div className="w-[350px] flex-shrink-0 snap-start">
                    <ProjectCard
                      title="UberShift: Employee Scheduling App"
                      organization="Cal Poly Technology Services"
                      image="/UberShifts.png"
                      technologies={["Go", "Slack API", "Microsoft Azure"]}
                      date="March. 2026 - Present"
                      description="filler text"
                      link=""
                      isLoggedIn={isLoggedIn}
                      onSaveDescription={async (newDesc) => {
                        await fetch("/api/projects", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            title: "UberShift: Employee Scheduling App",
                            description: newDesc,
                          }),
                        });
                      }}
                    />
                  </div>

                  <div className="w-[350px] flex-shrink-0 snap-start">
                    <ProjectCard
                      title="Event & Volunteer Manager"
                      organization="Much Hope Foundation"
                      image="/muchhopelogo.png"
                      technologies={[
                        "Node.js",
                        "React",
                        "Express",
                        "MongoDB",
                        "Clerk",
                        "Tailwind CSS",
                      ]}
                      date="Jan. 2026 - June. 2026"
                      description="filler text"
                      link=""
                      isLoggedIn={isLoggedIn}
                      onSaveDescription={async (newDesc) => {
                        await fetch("/api/projects", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            title: "Event & Volunteer Manager",
                            description: newDesc,
                          }),
                        });
                      }}
                    />
                  </div>
                </div>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-neutral-700">
                past
              </h3>

              <div className="w-full overflow-hidden">
                <div className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory">
                  <div className="w-[350px] flex-shrink-0 snap-start">
                    <ProjectCard
                      title="Donation Tracker"
                      organization="Habitat for Humanity"
                      image="/h4hlogo.jpeg"
                      technologies={[
                        "Node.js",
                        "React",
                        "Express",
                        "MongoDB",
                        "Clerk",
                        "Tailwind CSS",
                      ]}
                      date="Jan. 2025 - June. 2025"
                      description="filler text"
                      link=""
                      isLoggedIn={isLoggedIn}
                      onSaveDescription={async (newDesc) => {
                        await fetch("/api/projects", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            title: "Donation Tracker",
                            description: newDesc,
                          }),
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div id="experience" className="scroll-mt-28">
              <Experience />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}