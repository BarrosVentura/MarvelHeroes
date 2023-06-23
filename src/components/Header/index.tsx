"use client";

import Link from "next/link";
import { HeaderWrapper } from "./style";

export function Header() {
  return (
    <HeaderWrapper>
      <Link href={"/"}>Home</Link>
    </HeaderWrapper>
  );
}
