"use server";

import { AppDataSource } from "../../data-source";
import { UserController } from "./user.controller";

export async function getUsers() {
  return await AppDataSource.initialize()
    .then(async () => {
      const userController = new UserController();
      const users = await userController.read();
      console.log("🚀 ~ .then ~ users:", users);
      return users;
    })
    .catch((error) => console.log("AppDataSourceError: " + error));
}
