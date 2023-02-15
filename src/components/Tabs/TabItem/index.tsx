import type { FC } from "react";

import Link from "next/link";
import tw from "twin.macro";

export type TabItemProps = {
  id?: number;
  href: string;
  label: string;
  Icon: JSX.Element;
};

export const TabItem: FC<TabItemProps> = ({ href, label, Icon }) => (
  <div css={tw`flex h-12 w-full items-center justify-center`}>
    <Link href={href} aria-label={label}>
      {Icon}
    </Link>
  </div>
);
