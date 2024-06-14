export interface ICreateUser {
  email?: string;
  password?: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

export interface ICreateUserProfile {
  profile_image: string;
  fullname: string;
  birthdate: Date;
}

export interface ICreateUserWithGoogle {
  email: string;
  fullname: string;
  uid: string;
  firstName: string;
  lastName: string;
}