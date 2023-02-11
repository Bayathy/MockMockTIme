import type {FC} from "react";

import Image from "next/image";
import tw from "twin.macro";

export type AvaterProparty = {
    src : string
}

export const Avater : FC<AvaterProparty> = ({src}) => (
    <div css={tw`relative h-8 w-8 overflow-hidden rounded-full `}>
        <Image fill css={tw`aspect-square object-cover`} src={src} alt={"test"}/>
    </div>
)
