import {RegularExpressions} from './Constants';

export const GetisEmailValid = (email: string) => {
  return RegularExpressions.emailvalidation.test(email);
};

export const GetisPasswordValid = (password: string) => {
  return RegularExpressions.PasswordValidation.test(password);
};
