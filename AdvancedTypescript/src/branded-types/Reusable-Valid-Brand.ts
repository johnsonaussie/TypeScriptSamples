import { it } from "vitest";
import { Brand } from "../helpers/Brand";

type Valid<T> = Brand<T, "Valid">;

interface PasswordValues {
    password: string;
    confirmPassword: string;
}

const validatePassword = (values: PasswordValues): Valid<PasswordValues> => {
    if (values.password !== values.confirmPassword) {
      throw new Error("Passwords do not match");
    }
  
    return values as Valid<PasswordValues>;
};

const createUserOnApi = (values: Valid<PasswordValues>) => {
  // Imagine this function creates the user on the API
};

it("Should fail if you do not validate the values before calling createUserOnApi", () => {
  const onSubmitHandler = (values: PasswordValues) => {
    // @ts-expect-error
    createUserOnApi(values);
  };
});

it("Should succeed if you DO validate the values before calling createUserOnApi", () => {
  const onSubmitHandler = (values: PasswordValues) => {
    const validatedValues = validatePassword(values);
    createUserOnApi(validatedValues);
  };
});

const pw1:PasswordValues = {
    password:"12345",
    confirmPassword:"12345"
};
const pw2:PasswordValues = {
    password:"12345",
    confirmPassword:"123456"
};
console.log("passord of pw1:",validatePassword(pw1));
validatePassword(pw2);//throw new Error("Passwords do not match");
