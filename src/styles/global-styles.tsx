import type { FC } from "react";

import { Global } from "@emotion/react";
import { Noto_Sans_JP } from "@next/font/google";
import { css, GlobalStyles as BaseStyles } from "twin.macro";

const noto_normal = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const customStyles = css`
  html: {
  },
`;

const GlobalStyles: FC = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
    <style jsx global={true}>
      {`
        html {
          font-family: ${noto_normal.style.fontFamily};
        }
      `}
    </style>
  </>
);

export default GlobalStyles;
