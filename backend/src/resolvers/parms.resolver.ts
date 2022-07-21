import { uploadCoverType } from "../types.interfaces/resolvers.types";

export const uploadCover: uploadCoverType = async (_, file) => {
  return { result: "saved" };
};
