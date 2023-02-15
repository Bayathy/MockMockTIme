import type { FC } from "react";

import { IconAward, IconCategory } from "@tabler/icons-react";
import tw from "twin.macro";

import { ProfileBox } from "../../ProfileBox";
import { TabBar } from "../../Tabs/Tabs";

export const SideBarSection: FC = () => {
  return (
    <section
      css={tw`sticky grid h-screen max-w-max grid-rows-[auto_1fr_auto] shadow-md`}
    >
      <div css={tw`flex h-16 items-center justify-center px-2`}>
        <h1 css={tw`text-2xl font-medium`}>MockMockTime</h1>
      </div>
      <div css={tw`mt-4`}>
        <div css={tw`m-auto mx-2 flex items-center justify-center border-b-2`}>
          <IconCategory />
          <p css={tw`text-xl font-medium`}>Menu</p>
        </div>
        <TabBar
          items={[
            {
              id: 1,
              Icon: <IconAward />,
              href: "/",
              label: "test",
            },
            {
              id: 2,
              Icon: <IconAward />,
              href: "/",
              label: "test",
            },
            {
              id: 3,
              Icon: <IconAward />,
              href: "/",
              label: "test",
            },
          ]}
        />
      </div>
      <ProfileBox />
    </section>
  );
};
