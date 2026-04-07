"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";
import Fish from "@/components/Fish";
import Ghost from "@/components/Ghost";
import Witch from "@/components/Witch";
import Image from "next/image";

export default function ArtPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-700">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className="mx-auto max-w-7xl px-4 py-6">
        <Banner />

        <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
          <Sidebar />

          <main className="min-w-0 space-y-6">
            <div id="my-art" className="scroll-mt-28">
              <h2 className="mb-5 text-2xl font-bold text-neutral-700">
                :: my art
              </h2>

              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-8">                  

                  <div className="rounded-2xl bg-neutral-50 p-4 shadow transition flex flex-col items-center">
                    <Fish />
                    <p className="mt-3 text-sm text-neutral-600">fish animation</p>
                  </div>

                  <div className="rounded-2xl bg-neutral-50 p-4 shadow transition flex flex-col items-center">
                    <Ghost />
                    <p className="mt-3 text-sm text-neutral-600">ghost animation</p>
                  </div>

                  <div className="rounded-2xl bg-neutral-50 p-4 shadow  transition flex flex-col items-center">
                    <Witch />
                    <p className="mt-3 text-sm text-neutral-600">witch animation</p>
                  </div>

                  <div className="break-inside-avoid mb-6 rounded-2xl bg-neutral-50 p-4 shadow transition">
                    <Image
                      src="/rings.jpg"
                      alt="rings"
                      width={200}
                      height={200}
                      className="mx-auto rounded-xl object-cover"
                    />
                    <p className="mt-3 text-sm text-neutral-600 text-center">
                      rings & jewelry collection from an old friend
                    </p>
                  </div>

                  <div className="break-inside-avoid mb-6 rounded-2xl bg-neutral-50 p-4 shadow transition">

                    <div className="flex justify-center">
                      <Image
                        src="/doggy.jpeg"
                        alt="painting for my math teacher"
                        width={300}
                        height={300}
                        className="mx-auto rounded-xl object-cover"
                      />
                    </div>

                    <p className="mt-3 text-sm text-neutral-600 text-center">
                      painting for my math teacher
                    </p>
                  </div>

                  <div className="break-inside-avoid mb-6 rounded-2xl bg-neutral-50 p-4 shadow flex flex-col items-center">
                    <Image
                      src="/retrotv.jpeg"
                      alt="retro tv"
                      width={200}
                      height={200}
                      className="mx-auto rounded-xl object-cover"
                    />
                    <p className="mt-3 text-sm text-neutral-600 text-center">
                      retro tv
                    </p>
                  </div>

                  <div className="break-inside-avoid mb-6 rounded-2xl bg-neutral-50 p-4 shadow transition">
                    <Image
                      src="/haircut.jpg"
                      alt="haircut"
                      width={200}
                      height={200}
                      className="mx-auto rounded-xl object-cover"
                    />
                    <p className="mt-3 text-sm text-neutral-600 text-center">
                      ap art piece 1
                    </p>
                  </div>

                  <div className="break-inside-avoid mb-6 rounded-2xl bg-neutral-50 p-4 shadow transition">
                    <Image
                      src="/clock.jpeg"
                      alt="retro tv"
                      width={200}
                      height={200}
                      className="mx-auto rounded-xl object-cover"
                    />
                    <p className="mt-3 text-sm text-neutral-600 text-center">
                      watercolor & ink painting
                      reference: eric freitas
                    </p>
                  </div>
                  
                  <div className="break-inside-avoid mb-6 rounded-2xl bg-neutral-50 p-4 shadow transition">
                    <Image  
                      src="/eating.jpeg"
                      alt="eating"
                      width={200}
                      height={200}
                      className="mx-auto rounded-xl object-cover"
                    />
                    <p className="mt-3 text-sm text-neutral-600 text-center">
                      ap art piece 2
                    </p>
                  </div>
                </div>
            </div>  
          </main>
        </div>
      </div>
    </div>
  );
}