import type { FC } from "react";

import tw from "twin.macro";

import { Card } from "../Card";

export const MainSection: FC = () => {
  return (
    <section css={tw`m-auto max-w-2xl`}>
      <h2 css={tw`text-2xl`}>main section</h2>
      <Card />
    </section>
  );
};
