export const getKeys = <T>(obj: Record<string, any>, keysNeeded: string[]) => {
  let newObj: any = {};

  Object.keys(obj).forEach((element) => {
    if (keysNeeded.includes(element)) {
      newObj[element] = obj[element];
    }
  });

  return newObj as T;
};
