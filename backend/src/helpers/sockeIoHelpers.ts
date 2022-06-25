const valableTarget = ["send", "reaction", "remove", "seen"];

export const validateEvnt = (target: string) => {
  if (!valableTarget.includes(target)) return "somthig wrong happend";
  // validate data of the target here ...
  //
  //
  return;
};
