import {Request, Response} from 'express'
import { MessagesServices } from '../services/MessagesServices'


class MessagesController {

  async create(request: Request, response: Response){

    const {admin_id, text, user_id} = request.body

    const messageServices = new MessagesServices()


    const message = await messageServices.create({
      admin_id,
      text,
      user_id
    })

    return response.json(message)
  }

  async showByUser(request: Request, response: Response){
    const {id} = request.params

    const messagesServices = new MessagesServices()

    const list = await messagesServices.ListByUser(id)

    return response.json(list)
  }

}

export default new MessagesController