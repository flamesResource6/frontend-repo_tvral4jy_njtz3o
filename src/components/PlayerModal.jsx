import { useEffect } from "react";
import { X } from "lucide-react";

export default function PlayerModal({ open, onClose, src, title }) {
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose?.();
    if (open) window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-lg bg-black shadow-2xl">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-2 top-2 z-10 rounded bg-white/10 p-2 text-white hover:bg-white/20"
        >
          <X />
        </button>
        <div className="w-full pt-[56.25%]">{/* 16:9 */}
          <iframe
            title={title}
            src={src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
        <div className="p-4 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </div>
  );
}
