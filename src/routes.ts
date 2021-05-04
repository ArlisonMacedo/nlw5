import { Router } from 'express'
import MessagesControlle from './controllers/MessagesControlle'
import SettingsController from './controllers/SettingsController'
import UsersController from './controllers/UsersController'


const routes = Router()

routes.post('/settings', SettingsController.create)
routes.post('/users', UsersController.create)
routes.post('/messages', MessagesControlle.create)
routes.get('/messages/:id', MessagesControlle.showByUser)

export { routes }
