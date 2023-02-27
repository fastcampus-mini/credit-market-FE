export const isValidateEmail = (email: string) => {
  return /^[A-Za-z0-9.\-_]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/.test(email);
};

export const isValidatePassword = (password: string) => {
  return !(password.length < 8 || password.length > 20);
};

export const isValidateName = (name: string) => {
  return !(name.length < 1 || !/^[가-힣]+$/.test(name));
};

export const isValidateCreditScore = (credit: number) => {
  return !(credit < 0 || credit > 1000);
};

export const isValidatePasswordCheck = (password: string, passwordCheck: string) => {
  return password === passwordCheck;
};
