import type { FC, PropsWithChildren } from "react";

import tw from "twin.macro";

import { SideBarSection } from "../Section/SideBarSection";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div css={tw`flex flex-row`}>
      <SideBarSection />
      <main css={tw`relative grow px-4`}>{children}</main>
    </div>
  );
};
