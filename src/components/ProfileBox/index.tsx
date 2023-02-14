import type { FC } from "react";

import tw from "twin.macro";

import { Avatar } from "../commons/avatar";

export const ProfileBox: FC = () => {
  return (
    <div css={tw`flex h-16 items-center border-t-2 p-2`}>
      <Avatar src={"/test.png"} />
      <div css={tw`grow`}>
        <p css={tw`text-center`}>Name</p>
      </div>
    </div>
  );
};
