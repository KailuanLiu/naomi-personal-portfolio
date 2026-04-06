import { useState } from "react";
import style from "@/styles/navbar.module.css";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setIsLoggedIn(true);
      setShowLogin(false);
      setPassword('');
      setError('');
    } else {
      setError('Wrong password');
    }
  };

  const handleLogout = async () => {
    const res = await fetch('/api/logout', {
      method: 'POST'});
      setIsLoggedIn(false);
  };

  return (
    <header className={`${style.navbar} font-mono`}>
      <div className={style.left}>
        <Link href="/">HOME</Link>
        <a 
          href="https://github.com/KailuanLiu"
          target="_blank"
          rel="noopener noreferrer"
        > GITHUB </a>
        <a 
          href="https://www.linkedin.com/in/kailuanliu/"
          target="_blank"
          rel="noopener noreferrer"
        > LINKEDIN </a>
      </div>

      <div className={style.right}>
          {isLoggedIn ? (
            <button className = {style.edit} onClick = {handleLogout}> LOGOUT </button>
          ) : (
            <button className = {style.edit} onClick = {() => setShowLogin(true)}> AUTH </button>
          )}
          {showLogin && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
              <div className="rounded-2xl bg-white p-8 shadow w-full max-w-sm space-y-4">
                <h1 className="text-lg font-bold text-neutral-700">Admin Login</h1>

                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full rounded-xl border border-gray-300 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-300"
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowLogin(false)}
                    className="flex-1 h-10 rounded-md border border-gray-300 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleLogin}
                    className="flex-1 h-10 rounded-md bg-neutral-900 text-white hover:bg-neutral-800"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          )}
          </div>
    </header>
  );
}