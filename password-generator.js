import { error } from "console";
import generatePassword from "generate-password";

const randomPassword = generatePassword.generate({
  length: 16,
  numbers: true,
  uppercase: true,
  lowercase: true,
});

console.log(`Random password is ${randomPassword}`);
