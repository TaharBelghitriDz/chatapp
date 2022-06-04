export const validEmail = (str: string): boolean => {
  if (
    str.length < 50 &&
    str.length > 5 &&
    new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}").test(str)
  )
    return true;
  else return false;
};

export const validName = (str: string): boolean => {
  if (
    str.length > 40 &&
    str.length < 5 &&
    new RegExp("/^[A-Za-zs]*$/").test(str)
  )
    return true;
  else return false;
};
