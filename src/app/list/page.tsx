"use client";

import { getComicsByHeroName } from "@/api/marvel";
import { useMarvelHeroContext } from "@/context/marvelHero";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

interface HeroesComicInterface {
  data: {
    data: {
      results: {
        id: number;
        name: string;
        thumbnail: {
          extension: string;
          path: string;
        };
      }[];
    };
  };
}

export default function List() {
  const { currentHero } = useMarvelHeroContext();
  console.log({ currentHero });
  const { data, isLoading, isError } = useQuery<HeroesComicInterface>({
    queryKey: ["hero_listing"],
    queryFn: () => getComicsByHeroName(currentHero ?? ""),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 10,
    retry: false,
  });

  if (isError) {
    return <>ocorreu um erro</>;
  }

  if (isLoading) {
    return <>carregando</>;
  }

  return (
    <main>
      <section>
        <div>
          {data.data.data.results.map((hero) => (
            <div key={hero.id}>
              <Image
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
                width={200}
                height={300}
              />
              <p>{hero.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
