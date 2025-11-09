import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Row({ title, items = [], onSelect }) {
  const scroller = useRef(null);

  const scrollBy = (dir) => {
    const el = scroller.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9 * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="relative">
      <h3 className="mb-3 px-4 text-lg font-semibold text-white">{title}</h3>
      <div className="group relative">
        <button
          onClick={() => scrollBy("left")}
          className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur transition hover:bg-black/80 group-hover:block"
          aria-label="Scroll left"
        >
          <ChevronLeft />
        </button>
        <div
          ref={scroller}
          className="no-scrollbar relative flex gap-3 overflow-x-auto px-4 pb-4"
        >
          {items.map((m) => (
            <button
              key={m.id}
              onClick={() => onSelect?.(m)}
              className="group/item relative h-40 w-64 flex-shrink-0 overflow-hidden rounded-md bg-neutral-900"
            >
              <img
                src={m.thumbnail}
                alt={m.title}
                className="h-full w-full object-cover transition duration-300 group-hover/item:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-2 right-2 text-left text-sm font-medium text-white drop-shadow">
                {m.title}
              </div>
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollBy("right")}
          className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur transition hover:bg-black/80 group-hover:block"
          aria-label="Scroll right"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
