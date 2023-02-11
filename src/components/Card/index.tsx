import type { FC } from "react";

import Link from "next/link";
import tw from "twin.macro";

import { Avatar } from "../commons/avatar";

export const Card: FC = () => {
  return (
    <Link href={"/"} css={tw`block`}>
      <div css={tw`w-1/3 rounded-xl bg-slate-50 p-4`}>
        <h3 css={tw`text-sm`}>React勉強中</h3>
        <Avatar src={"/test.png"} />
      </div>
    </Link>
  );
};
