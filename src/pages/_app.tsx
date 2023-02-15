import GlobalStyles from "../styles/global-styles";

import type { AppProps } from "next/app";

if (process.env.NODE_ENV === "development") {
  const MockServer = () =>
    import("../mocks/browser").then((mo) => {
      mo.worker.start();
    });
  MockServer();
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
