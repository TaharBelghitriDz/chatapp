import { uploadCoverType } from "../types/resolvers.types";

export const uploadCover: uploadCoverType = async (_, file) => {
  return { result: "saved" };
};
