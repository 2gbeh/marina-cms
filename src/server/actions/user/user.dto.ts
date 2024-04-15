export class CreateUserDto {
  name!: string;
  email!: string;
  password!: string;
}

export class ReadUserDto {
  name?: string;
  email?: string;
}

export class UpdateUserDto {
  name?: string;
  password?: string;
}
