import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Row from "./components/Row";
import PlayerModal from "./components/PlayerModal";

const CATALOG = {
  "Trending Now": [
    {
      id: "tt0133093",
      title: "The Matrix",
      thumbnail:
        "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg",
      trailer: "https://www.youtube.com/embed/vKQi3bBA1y8?autoplay=1&rel=0",
      description:
        "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    },
    {
      id: "tt0816692",
      title: "Interstellar",
      thumbnail:
        "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo668jfxS4Xw2.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1&rel=0",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    },
    {
      id: "tt1375666",
      title: "Inception",
      thumbnail:
        "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0?autoplay=1&rel=0",
      description:
        "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
    },
  ],
  "Popular on Flix": [
    {
      id: "tt4154796",
      title: "Avengers: Endgame",
      thumbnail:
        "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
      trailer: "https://www.youtube.com/embed/TcMBFSGVi1c?autoplay=1&rel=0",
      description:
        "The Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
    },
    {
      id: "tt7286456",
      title: "Joker",
      thumbnail:
        "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
      trailer: "https://www.youtube.com/embed/zAGVQLHvwOY?autoplay=1&rel=0",
      description:
        "In Gotham City, mentally troubled comedian Arthur Fleck embarks on a downward spiral of crime and revolution.",
    },
    {
      id: "tt1877830",
      title: "The Batman",
      thumbnail:
        "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/cqAkfx94Y7JHzp7fM9G9r8Q0r1T.jpg",
      trailer: "https://www.youtube.com/embed/mqqft2x_Aa4?autoplay=1&rel=0",
      description:
        "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate.",
    },
  ],
  "Because you watched Sci‑Fi": [
    {
      id: "tt4154756",
      title: "Avengers: Infinity War",
      thumbnail:
        "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
      trailer: "https://www.youtube.com/embed/6ZfuNTqbHE8?autoplay=1&rel=0",
      description:
        "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos.",
    },
    {
      id: "tt0083658",
      title: "Blade Runner",
      thumbnail:
        "https://image.tmdb.org/t/p/w500/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/k7rEpKq3NQxZL4vTrrXQnVE6h2C.jpg",
      trailer: "https://www.youtube.com/embed/eogpIG53Cis?autoplay=1&rel=0",
      description:
        "A blade runner must pursue and terminate four replicants who have stolen a ship in space and returned to Earth.",
    },
    {
      id: "tt4158110",
      title: "Mr. Robot",
      thumbnail:
        "https://image.tmdb.org/t/p/w500/oKIBhzZzDX07SoE2bOLhq2EE8rf.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/original/A8QTKJxSg7jGkG2r3aMc2SGIN1B.jpg",
      trailer: "https://www.youtube.com/embed/xIBiJ_SzJTA?autoplay=1&rel=0",
      description:
        "A cybersecurity engineer and hacker with dissociative identity disorder is recruited by a mysterious anarchist.",
    },
  ],
};

export default function App() {
  const [search, setSearch] = useState("");
  const [toPlay, setToPlay] = useState(null);

  const hero = CATALOG["Trending Now"][0];

  const rows = useMemo(() => {
    if (!search) return CATALOG;
    const q = search.toLowerCase();
    const filtered = {};
    for (const [name, items] of Object.entries(CATALOG)) {
      const f = items.filter((m) => m.title.toLowerCase().includes(q));
      if (f.length) filtered[name] = f;
    }
    return filtered;
  }, [search]);

  const allRowsEmpty = useMemo(() => Object.keys(rows).length === 0, [rows]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onSearch={(q) => setSearch(q ?? "")} />

      <div className="pt-16">
        <Hero
          title={hero.title}
          description={hero.description}
          backdrop={hero.backdrop}
          onPlay={() => setToPlay(hero)}
        />

        <main className="mx-auto mt-6 max-w-7xl space-y-6">
          {allRowsEmpty ? (
            <div className="px-4 py-16 text-center text-white/80">
              No results. Try another search.
            </div>
          ) : (
            Object.entries(rows).map(([label, items]) => (
              <Row
                key={label}
                title={label}
                items={items}
                onSelect={(m) => setToPlay(m)}
              />
            ))
          )}
        </main>
      </div>

      <PlayerModal
        open={!!toPlay}
        onClose={() => setToPlay(null)}
        src={toPlay?.trailer}
        title={toPlay?.title}
      />
    </div>
  );
}
