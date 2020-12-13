import { Router } from 'express'

const routes = Router()

import UserController from './controllers/UserController'

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.get('/', (_req, res) => {
  return res.send('hello world 23ssssssss')
})

export default routes
