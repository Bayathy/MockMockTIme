import axios from "axios";
import useSWR from "swr";

import type { CardProperty } from "../../components/Card";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useCardList = (): [CardProperty[] | undefined, boolean] => {
  const { data, isLoading } = useSWR<CardProperty[]>("list", fetcher);
  return [data, isLoading];
};
