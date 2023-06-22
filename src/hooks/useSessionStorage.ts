"use client";

export function useSessionStorage() {
  function setItem(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }

  function getItem(key: string) {
    return sessionStorage.getItem(key);
  }

  return { setItem, getItem };
}
