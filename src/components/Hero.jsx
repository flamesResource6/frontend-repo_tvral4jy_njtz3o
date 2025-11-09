import { Play, Info } from "lucide-react";

export default function Hero({ title, description, backdrop, onPlay }) {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <img
        src={backdrop}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end gap-4 px-4 pb-24">
        <h1 className="text-4xl font-extrabold text-white drop-shadow md:text-5xl">{title}</h1>
        <p className="max-w-2xl text-sm text-white/80 md:text-base">{description}</p>
        <div className="mt-2 flex gap-3">
          <button
            onClick={onPlay}
            className="flex items-center gap-2 rounded bg-white px-4 py-2 font-medium text-black transition hover:bg-white/90"
          >
            <Play size={18} /> Play
          </button>
          <button className="flex items-center gap-2 rounded bg-white/20 px-4 py-2 font-medium text-white backdrop-blur transition hover:bg-white/30">
            <Info size={18} /> More Info
          </button>
        </div>
      </div>
    </section>
  );
}
