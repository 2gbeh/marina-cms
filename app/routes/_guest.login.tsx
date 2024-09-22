import { redirect } from "@remix-run/react";
import { PATH } from "~/constants/PATH";


export const loader = async () => redirect(PATH.login);