"use client";

import { useSessionStorage } from "@/hooks/useSessionStorage";
import { createContext, useContext, useEffect, useState } from "react";

interface MarverHeroContextInterface {
  currentHero: string | null | undefined;
  setCurrentHero: (value: string | null) => void;
}

const MarvelHeroContext = createContext<MarverHeroContextInterface | undefined>(
  undefined
);

export function MarvelHeroProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getItem, setItem } = useSessionStorage();
  const [hasMounted, setHasMounted] = useState(false);
  const [currentHero, setCurrentHero] = useState<string | null | undefined>();

  useEffect(() => {
    if (!hasMounted) {
      setHasMounted(true);
    }
  }, [hasMounted]);

  useEffect(() => {
    setCurrentHero(getItem("currentHero"));
  }, [hasMounted, setCurrentHero, getItem]);

  useEffect(() => {
    if (!currentHero) return;
    setItem("currentHero", currentHero);
  }, [currentHero, setItem]);

  return (
    <MarvelHeroContext.Provider
      value={{
        setCurrentHero,
        currentHero,
      }}
    >
      {children}
    </MarvelHeroContext.Provider>
  );
}

export function useMarvelHeroContext() {
  const context = useContext(MarvelHeroContext);

  if (!context) {
    throw new Error("Context not defined");
  }

  return context;
}
