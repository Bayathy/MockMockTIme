import type { FC } from "react";

import tw from "twin.macro";

import { TabItem } from "../TabItem";

import type { TabItemProps } from "../TabItem";

export type TabsProps = {
  items: Array<TabItemProps>;
};

export const TabBar: FC<TabsProps> = ({ items }) => (
  <nav css={tw`sticky w-48`}>
    <ul css={tw`flex w-full flex-col`}>
      {items.map((index) => (
        <li key={index.id}>
          <TabItem title={index.title} href={index.href} />
        </li>
      ))}
    </ul>
  </nav>
);
