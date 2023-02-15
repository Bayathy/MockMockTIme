import type { FC } from "react";

import tw from "twin.macro";

import { Card } from "../../Card";

import type { CardProperty } from "../../Card";

export type MainSectionProps = {
  cardList: CardProperty[] | undefined;
};

export const MainSection: FC<MainSectionProps> = ({ cardList }) => {
  return (
    <section css={tw`m-auto`}>
      <h2 css={tw`text-2xl`}>main section</h2>
      {cardList &&
        cardList.map((index, key) => (
          <Card key={key} title={index.title} guestImage={index.guestImage} />
        ))}
    </section>
  );
};
