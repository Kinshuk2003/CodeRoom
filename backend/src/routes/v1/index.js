import express from 'express';
import { pingCheck } from '../../controllers/pingController.js';
import projectRouter from './projects.js';
import { copliotController } from '../../controllers/copilotController.js';


const router = express.Router();


router.get('/ping', pingCheck);
router.use('/projects', projectRouter);
router.use('/copilot', copliotController);

export default router;