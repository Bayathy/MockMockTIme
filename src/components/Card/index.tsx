import type { FC } from "react";

import Link from "next/link";
import tw from "twin.macro";

import { Avatar } from "../commons/avatar";

export type CardProperty = {
  title: string;
  guestImage: Array<string>;
};

export const Card: FC<CardProperty> = ({ title, guestImage }) => {
  return (
    <Link href={"/"} css={tw`block`}>
      <div css={tw`rounded-xl bg-slate-50 p-4`}>
        <h3 css={tw`text-sm`}>{title}</h3>
        {guestImage.map((index, key) => (
          <Avatar key={key} src={index} />
        ))}
      </div>
    </Link>
  );
};
