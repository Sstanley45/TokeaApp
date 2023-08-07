import  express  from 'express'
const router = express.Router()

import { getAllEvents } from '../controllers/EventControllers.js' 

router.route('/event').get(getAllEvents)

export default router;