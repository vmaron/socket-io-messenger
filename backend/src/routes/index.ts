import {heroRoutes} from './hero.route';
import {messageRoutes} from './message.route';
import express from 'express';

const router = express.Router();
router.use('/', heroRoutes);
router.use('/', messageRoutes);

export default router;
