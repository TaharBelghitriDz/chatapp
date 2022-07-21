import client from "../../config/graphql";

export const loadSchema = (opt: "mutate" | "query", query: any) =>
  opt === "mutate" ? client.mutate(query) : client.query(query);

export const errorMsg = (str: string): string[] | string => {
  if (str.split(".").length > 0) return str.split(".");
  else return str;
};
