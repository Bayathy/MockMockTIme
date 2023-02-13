import type { FC } from "react";

import tw from "twin.macro";

import { TabBar } from "../../Tabs/Tabs";

export const SideBarSection: FC = () => {
  return (
    <section css={tw`sticky`}>
      <TabBar
        items={[
          { id: 1, title: "TabMenu1", href: "/" },
          { id: 2, title: "TabMenu1", href: "/" },
          { id: 3, title: "TabMenu1", href: "/" },
        ]}
      />
    </section>
  );
};
