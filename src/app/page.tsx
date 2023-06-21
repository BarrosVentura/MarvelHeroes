"use client";

import { getComicsByHeroName } from "@/api/marvel";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const query = useQuery({
    queryKey: ["hero_search"],
    queryFn: getComicsByHeroName,
  });

  return <main>oi gente</main>;
}
