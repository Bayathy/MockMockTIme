import type { FC } from "react";

import tw from "twin.macro";

export const Header: FC = () => {
  return (
    <header css={tw`h-16`}>
      <h1 css={tw`text-2xl`}>MockMockTime</h1>
    </header>
  );
};
