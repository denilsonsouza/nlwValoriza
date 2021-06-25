import { Request, Response } from "express";
import { CreateComplimentService } from "../service/CreateComplimentService";
import { SendEmailController } from "./SendEmailController";

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_receiver, message } = request.body;
    const { user_id } = request ;
    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      tag_id,
      user_sender: user_id,
      user_receiver,
      message,
    });

    const sendEmailController = new SendEmailController();
    
    sendEmailController.handle(request,response);

    return response.json(compliment);
  }
}

export { CreateComplimentController };