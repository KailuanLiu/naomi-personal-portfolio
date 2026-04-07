import { useState } from "react";
import * as React from "react";
import style from "@/styles/navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { id: "about", label: "about", href: "/#about" },
  { id: "experience", label: "experience", href: "/#experience" },
  { id: "projects", label: "projects", href: "/#projects" },
  { id: "my-art", label: "my art", href: "/my-art" },
];

export default function Navbar({
  isLoggedIn,
  setIsLoggedIn,
}: {
  isLoggedIn: boolean;
  setIsLoggedIn: (v: boolean) => void;
}) {
  const pathname = usePathname();

  const [active, setActive] = useState(tabs[0].id);
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  React.useEffect(() => {
    fetch("/api/admin", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setIsLoggedIn(data.isLoggedIn));
  }, [setIsLoggedIn]);

  const handleLogin = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      setIsLoggedIn(true);
      setShowLogin(false);
      setPassword("");
      setError("");
    } else {
      setError("Wrong password");
    }
  };

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    setIsLoggedIn(false);
  };

  const isActive = (tab: (typeof tabs)[number]) => {
    if (tab.id === "my-art") {
      return pathname === "/my-art";
    }

    return pathname === "/" && active === tab.id;
  };

  return (
    <header className={`${style.navbar} relative font-mono`}>
      <div className="flex items-center">
        <button
          onClick={() => {
            if (isLoggedIn) {
              handleLogout();
            } else {
              setShowLogin(true);
            }
          }}
          className="h-10 w-10 overflow-hidden rounded-full border border-neutral-200 transition hover:opacity-80"
        >
          <Image
            src="/web-profilepicture.JPEG"
            alt="Profile"
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </button>
      </div>

      <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-6 text-sm font-semibold uppercase tracking-wide text-neutral-500">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            onClick={() => setActive(tab.id)}
            className={`pb-1 transition ${
              isActive(tab)
                ? "border-b-2 border-neutral-800 text-neutral-800"
                : "hover:text-neutral-700"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://github.com/KailuanLiu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-70"
        >
          <Image
            src="/githublogo.png"
            alt="GitHub"
            width={18}
            height={18}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/kailuanliu/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-70"
        >
          <Image
            src="/linkedin.png"
            alt="LinkedIn"
            width={18}
            height={18}
          />
        </a>
      </div>

      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-sm space-y-4 rounded-2xl bg-white p-8 shadow">
            <h1 className="text-lg font-bold text-neutral-700">Admin Login</h1>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-300"
            />

            {error && <p className="text-sm text-red-500">{error}</p>}

            <div className="flex gap-3">
              <button
                onClick={() => setShowLogin(false)}
                className="h-10 flex-1 rounded-md border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleLogin}
                className="h-10 flex-1 rounded-md bg-neutral-900 text-white hover:bg-neutral-800"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}