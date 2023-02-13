import type { FC, PropsWithChildren } from "react";

import { css } from "@emotion/react";
import { Noto_Sans_JP } from "@next/font/google";
import tw from "twin.macro";

import { Header } from "../Header";
import { TabBar } from "../Tabs/Tabs";

// If loading a variable font, you don't need to specify the font weight
const noto = Noto_Sans_JP({ subsets: ["latin"], weight: "400" });
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      css={[
        tw`grid grid-flow-col`,
        css`
          grid-template-columns: auto 1fr;
        `,
      ]}
    >
      <TabBar
        items={[
          { title: "TabMenu1", href: "/" },
          { title: "TabMenu1", href: "/" },
          { title: "TabMenu1", href: "/" },
        ]}
      />
      <main css={tw`relative px-4`} className={noto.className}>
        {children}
      </main>
    </div>
  );
};
