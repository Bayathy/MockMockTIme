import type { FC, PropsWithChildren } from "react";

import { Noto_Sans_JP } from "@next/font/google";

import { Header } from "../Header";

// If loading a variable font, you don't need to specify the font weight
const noto = Noto_Sans_JP({ subsets: ["latin"], weight: "400" });
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={noto.className}>{children}</main>
    </>
  );
};
