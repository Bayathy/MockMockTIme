import type { FC } from "react";

import { Noto_Sans_JP } from "@next/font/google";
import { GlobalStyles as BaseStyles } from "twin.macro";

const notoFont = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const GlobalStyles: FC = () => (
  <>
    <BaseStyles />
    <style jsx global suppressHydrationWarning>{`
      html {
        font-family: ${notoFont.style.fontFamily};
      }
    `}</style>
  </>
);

export default GlobalStyles;
