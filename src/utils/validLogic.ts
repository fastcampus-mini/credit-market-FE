export const isValidateEmail = (email: string) => {
  return /^[A-Za-z0-9.\-_]+@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/.test(email);
};

export const isValidatePassword = (password: string) => {
  return !(password.length < 8 || password.length > 20);
  // return '비밀번호는 8자 이상으로 설정하셔야 해요.';
};

export const isValidateName = (name: string) => {
  return !(name.length < 1 || !/^[가-힣]+$/.test(name));
  // return '이름은 한글로 정확하게 입력해주세요.';
};

export const isValidateCreditScore = (credit: number) => {
  return !(credit < 0 || credit > 1000);
  // return '개인신용점수를 정확하게 입력해주세요.';
};

export const isValidatePasswordCheck = (password: string, passwordCheck: string) => {
  return password === passwordCheck;
  // return '비밀번호를 다시 확인해주세요.';
};
