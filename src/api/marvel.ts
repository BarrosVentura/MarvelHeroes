import { api } from "@/lib/api";

export function getComicsByHeroName() {
  return api.get("/characters", {
    params: {
      orderBy: "name",
      name: "iron",
    },
  });
}
