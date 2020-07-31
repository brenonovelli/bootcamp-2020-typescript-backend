import { Router } from 'express';

import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

// STORE
sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
