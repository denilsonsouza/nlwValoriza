import { Request, Response } from "express";
import { CreateComplimentService } from "../service/CreateComplimentService";
import { SendEmailService } from "../service/SendEmailService";

class SendEmailController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_sender, user_receiver, message } = request.body;
    const { user_id } = request;

    const sendEmailService = new SendEmailService();
    sendEmailService.execute({tag_id,user_sender,user_receiver,message});

    return;
  }
}

export { SendEmailController };