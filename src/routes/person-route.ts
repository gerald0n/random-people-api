import { personController } from '../controllers/person-controller'
import { Router } from 'express'

const personRouter: Router = Router()

personRouter.get('/person', personController.sortPerson)

export default personRouter
