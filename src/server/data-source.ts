import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users as User } from "./actions/user/user.entity";

export { Repository } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "newsblog",
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});
