import { createServer } from "node:http";
import { createYoga, type Plugin } from "graphql-yoga";
import { useDeferStream } from "@graphql-yoga/plugin-defer-stream";
import { getSchema } from "./schema.js";

const plugin: Plugin = {
  onContextBuilding(ctx) {},
};

const yoga = createYoga({
  schema: getSchema(),
  plugins: [plugin, useDeferStream()],
  logging: "debug",
});
const server = createServer(yoga);

server.listen(4000, () => {
  console.log("Running a GraphQL API server at http://localhost:4000/graphql");
});
