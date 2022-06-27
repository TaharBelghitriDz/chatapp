import * as yup from "yup";

const valableTarget = ["send", "reaction", "remove", "seen"];

export const yupSchemasValidation: Record<string, any> = {
  send: yup.object().shape({
    content: yup.string().required().min(1).max(10000),
    room: yup.string().required().max(20).min(5),
    to: yup.string().required().max(30).min(5),
    transfer: yup.string(),
    repsponseOf: yup.string().max(20).min(1),
  }),
};

export const validateEvnt = async (target: string, data: any) => {
  if (!valableTarget.includes(target)) return;

  return await yupSchemasValidation[target].isValid(data);
};

export const validateId = (str: string) => {
  if (str.match(/^[0-9a-fA-F]{24}$/)) {
    return str;
  }
  return;
};
