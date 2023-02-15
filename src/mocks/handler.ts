import { rest } from "msw";

export const handlers = [
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  rest.get("/list", (req, res, ctx) => {
    return res(
      ctx.json({
        firstName: "John",
      })
    );
  }),
];
