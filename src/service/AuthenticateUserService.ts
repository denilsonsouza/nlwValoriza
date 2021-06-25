import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({ email });

    if (!user) {
      throw new Error("Email/password incorrect");
    }

    const match = await compare(password, user.password);

    if (!match) {
      throw new Error("Email/password incorrect");
    }
    const token = sign(
      {
        email: user.email,
      },
      "716e47e752d5be78c362a9a510200d4c",
      {
        subject: user.id,
        expiresIn: "1d",
      });
      return token;
  }
}

export { AuthenticateUserService }