"use client";

import { getComicsByHeroName } from "@/api/marvel";
import { useMarvelHeroContext } from "@/context/marvelHero";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { Card, CardsWrapper, Title } from "./style";
import Link from "next/link";

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
        <Title>Para a sua pesquisa {currentHero}, encontramos:</Title>
        <p>Agora você pode selecionar um para ver mais detalhes!</p>
        <CardsWrapper>
          {data.data.data.results.map((hero) => (
            <Link key={hero.id} href={`/hero/${hero.id}`}>
              <Card>
                <Image
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  alt={hero.name}
                  width={200}
                  height={300}
                />
                <p>{hero.name}</p>
              </Card>
            </Link>
          ))}
        </CardsWrapper>
      </section>
    </main>
  );
}
