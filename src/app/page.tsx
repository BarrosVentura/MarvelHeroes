"use client";

import { FormEvent, useRef } from "react";
import { HomeWrapper } from "./style";
import { useMarvelHeroContext } from "@/context/marvelHero";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { setCurrentHero } = useMarvelHeroContext();
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleSearchBar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = inputRef?.current?.value;
    if (content) {
      setCurrentHero(content);
      router.push("/list");
    }
  }
  return (
    <main>
      <HomeWrapper>
        <h1>Marvel Heroes</h1>
        <p>Pesquisa pelo nome de um personagem da marvel!</p>
        <form onSubmit={handleSearchBar}>
          <input ref={inputRef} type="text" id="searchbar" />
          <button type="submit">pesquisar</button>
        </form>
      </HomeWrapper>
    </main>
  );
}
