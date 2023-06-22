import { signIn } from "next-auth/react";
import getRequestHandler from "./commonUtlis/getRequestHandler";
import prisma from "./commonUtlis/prisma";
import bcrypt from "bcrypt";
import Response from "./commonUtlis/response";
signIn;

export default async function handler(req, res) {
  await getRequestHandler(req, res, ["POST"]);
  const { email, password } = req.body;
  const hash = bcrypt.hash(password);
  console.log(hash);
  try {
    const user = await prisma.users.create({
      data: {
        email: email,
        password: hash,
      },
    });
    await Response.successWithData(res,user,"signup successfull" , 200);
    // signIn(email,hash);
  } catch (error) {
    console.log(error);
    await Response.errorWithoutData(res,"something wrong" , 401);
  }
}
