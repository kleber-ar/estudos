import { Router } from 'express';
import userController from '../controllers/users.controller';

const router = Router();

router.get('/', userController.getAll);

export default router;
