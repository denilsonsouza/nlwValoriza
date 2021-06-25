import * as nodemailer from "nodemailer"
import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";
import {Configs} from "../configs/configs";


interface IEmailRequest {
   tag_id: string;
   user_sender: string;
   user_receiver: string;
   message: string;
}

class SendEmailService {

  async execute({tag_id, user_sender, user_receiver, message }: IEmailRequest) {

      const userRepositories = getCustomRepository(UsersRepositories);
      const tagsRepositories = getCustomRepository(TagsRepositories);

      const {email} = await userRepositories.findOne(user_receiver);
      const userSender = await userRepositories.findOne(user_sender);
      const {name} = await tagsRepositories.findOne(tag_id);
      const config = new Configs();

      var transport = nodemailer.createTransport({
         host: config.host,
         port: config.port,
         auth: {
           user: config.user,
           pass: config.password
         }
       });
       var messageEmail = {
         from: userSender.email,
         to: email,
         subject: "NLW Valoriza - Your receive the compliment",
         text: "Your receive the compliment from "+userSender.name,
         html: "<p> Your receive the compliment from " + userSender.name + "</p>",
       };
      try{
      transport.sendMail(messageEmail);
      }catch{
         throw new Error("Email send error!");
      }
   }


}


export { SendEmailService }