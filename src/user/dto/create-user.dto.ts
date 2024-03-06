import { LoginType } from "@prisma/client";

export class CreateUserDto {
  'name': string;
  'image': string;
  'email': string;
  'emailVerified': boolean;
  'phone': string;
  'password': string;
  'loginType': LoginType;
  'address': {
    street: string;
    village: string;
    city: string;
    state: string;
    country: string;
    survey: string;
    landmark: string;
  };
}

