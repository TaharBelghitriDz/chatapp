export const validEmail = (str: string): boolean => {
  try {
    if (
      str.length < 50 &&
      str.length > 5 &&
      new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}").test(str)
    )
      return true;
    else return false;
  } catch (error) {
    return false;
  }
};

export const validName = (str: string): boolean => {
  console.log("name " + str);
  try {
    if (str.length < 40 || str.length > 5 || !/^[a-zA-Z]+$/.test(str))
      return true;
    else return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
