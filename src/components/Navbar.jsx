import { Search, Bell, User } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");

  function submit(e) {
    e.preventDefault();
    onSearch?.(query);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-6">
          <div className="text-2xl font-extrabold tracking-tight text-red-600">Flix</div>
          <nav className="hidden gap-4 text-sm text-neutral-200 md:flex">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">Series</a>
            <a href="#" className="hover:text-white">Films</a>
            <a href="#" className="hover:text-white">New & Popular</a>
            <a href="#" className="hover:text-white">My List</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <form onSubmit={submit} className="hidden items-center gap-2 rounded-md bg-white/10 px-2 py-1 text-white focus-within:ring-2 focus-within:ring-white/40 md:flex">
            <Search size={16} className="opacity-80" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="w-40 bg-transparent text-sm placeholder:text-white/60 focus:outline-none"
            />
          </form>
          <button aria-label="Notifications" className="rounded bg-white/10 p-2 text-white transition hover:bg-white/20">
            <Bell size={18} />
          </button>
          <div className="flex items-center gap-2 rounded bg-white/10 px-2 py-1 text-white">
            <User size={18} />
            <span className="hidden text-sm md:inline">Account</span>
          </div>
        </div>
      </div>
    </header>
  );
}
