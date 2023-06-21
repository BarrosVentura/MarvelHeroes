"use client";

import { useRef } from "react";
import { HomeWrapper } from "./style";

export default function Home() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleSearchBar() {
    console.log(inputRef?.current?.value);
  }
  return (
    <main>
      <HomeWrapper>
        <h1>Marvel Heroes</h1>
        <p>Pesquisa pelo nome de um personagem da marvel!</p>
        <div>
          <input ref={inputRef} type="text" id="searchbar" />
          <button onClick={handleSearchBar}>pesquisar</button>
        </div>
      </HomeWrapper>
    </main>
  );
}
