export interface IUser {
  email: string;
  password?: string;
  passwordConfirm?: string;
  age: string;
  job: string;
}

interface usersignup {
  userEmail: string;
  userPassword: string;
  userGender: string;
  userBirthDate: string;
  userJob: string;
  userPrefCreditProductTypeName: string;
  userPrefInterestType: string;
  userCreditScore: number;
}

interface userlogin {
  id: string;
  password: string;
}
