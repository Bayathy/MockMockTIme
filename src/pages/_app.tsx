import { useEffect } from "react";

import axios from "axios";
import useSWR from "swr";

import GlobalStyles from "../styles/global-styles";

import type { AppProps } from "next/app";

if (process.env.NODE_ENV === "development") {
  const MockServer = () =>
    import("../mocks/browser").then((mo) => {
      mo.worker.start();
    });
  MockServer();
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function App({ Component, pageProps }: AppProps) {
  const { data } = useSWR("/list", fetcher);
  useEffect(() => {
    console.log(data);
  });
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
