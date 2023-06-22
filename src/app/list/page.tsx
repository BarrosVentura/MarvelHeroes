"use client";

import { getComicsByHeroName } from "@/api/marvel";
import { useMarvelHeroContext } from "@/context/marvelHero";
import { useQuery } from "@tanstack/react-query";

export default function List() {
  const { currentHero } = useMarvelHeroContext();
  const { data } = useQuery({
    queryKey: ["hero_listing"],
    queryFn: getComicsByHeroName,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
  });

  console.log({ data });

  return (
    <main>
      <section>
        <h1>{currentHero}</h1>
        <div>
          <div>
            <img src="" alt="" />
            <p>The Flash, Vol 1</p>
            <span>Joshua Williamson</span>
          </div>
        </div>
      </section>
    </main>
  );
}
