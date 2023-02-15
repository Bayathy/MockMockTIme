import { rest } from "msw";

import type { CardProperty } from "../components/Card";

export const handlers = [
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rest.get("/list", (req, res, ctx) => {
    return res(
      ctx.json<Array<CardProperty>>([
        {
          title: "test1",
          guestImage: ["/test.png"],
        },
      ])
    );
  }),
];
