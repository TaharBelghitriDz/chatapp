import { validEmail } from "../src/helpers/userDetails.validation";

test("validate email", () => {
  const validate = validEmail("gitnawi@gmail.com");
  console.log(validate);
  expect(validate).toBe(true);
});
