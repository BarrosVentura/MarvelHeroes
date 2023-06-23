import { api } from "@/lib/api";

export function getComicsByHeroName(heroName: string | undefined) {
  return api.get("/characters", {
    params: {
      orderBy: "name",
      nameStartsWith: heroName,
    },
  });
}
