"use client";

import { HeroesComicInterface, getMarvelHero } from "@/api/marvel";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { HeroWrapper, ListWrapper } from "./style";

export default function HeroPage() {
  const params = useParams();
  const { data } = useQuery<HeroesComicInterface>({
    queryKey: ["current_hero"],
    queryFn: () => getMarvelHero(params.id),
    refetchOnWindowFocus: false,
    retry: false,
  });
  const { id, name, description, series, thumbnail } =
    data?.data.data.results.at(0) || {};

  return (
    <HeroWrapper>
      <h1>{name}</h1>
      {thumbnail && (
        <Image
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt={name || ""}
          width={400}
          height={300}
        />
      )}
      <p>{description}</p>

      <ListWrapper>
        <h2>aparece em:</h2>
        <ul>
          {series?.items?.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </ListWrapper>
    </HeroWrapper>
  );
}
