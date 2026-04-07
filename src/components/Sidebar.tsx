import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      <div className="relative rounded-3xl bg-white p-5 shadow">
        <div className="mb-4 flex justify-center">
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

      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 space-y-2 text-center text-sm text-neutral-600">
        <h2 className="mb-3 text-xl font-bold text-neutral-700">
          :: contacts
        </h2>
        <p>kailuan1127@gmail.com</p>
        <p>kliu97@calpoly.edu</p>
        <p>626-525-1021</p>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-center text-sm text-neutral-600">
        <h2 className="mb-3 text-xl font-bold text-neutral-700">
          :: website specs
        </h2>

        <div className="mt-2 flex flex-wrap justify-center gap-2">
          <p className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
            Prisma + Postgres
          </p>
          <p className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
            Tailwind CSS
          </p>
          <p className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
            React
          </p>
          <p className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
            Next.js
          </p>
        </div>
      </div>
    </aside>
  );
}