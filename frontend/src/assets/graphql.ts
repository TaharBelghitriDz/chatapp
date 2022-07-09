import client from "../../config/graphql";

export const loadSchema = (opt: "mutate" | "query", query: any) =>
  opt === "mutate" ? client.mutate(query) : client.query(query);
