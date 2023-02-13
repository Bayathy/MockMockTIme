import type { FC } from "react";

import Link from "next/link";

export type TabItemProps = {
  id?: string;
  title: string;
  href: string;
};

export const TabItem: FC<TabItemProps> = ({ title, href }) => (
  <div>
    <Link href={href}>{title}</Link>
  </div>
);
