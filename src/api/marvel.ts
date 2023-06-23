import { api } from "@/lib/api";

export interface HeroesComicInterface {
  data: {
    data: {
      results: {
        id: number;
        name: string;
        description: string;
        thumbnail: {
          extension: string;
          path: string;
        };
        series: {
          items: {
            name: string;
          }[];
        };
      }[];
    };
  };
}

export function getComicsByHeroName(heroName: string | undefined) {
  return api.get("/characters", {
    params: {
      orderBy: "name",
      nameStartsWith: heroName,
    },
  });
}

export function getMarvelHero(heroId: string) {
  return api.get(`/characters/${heroId}`);
}
