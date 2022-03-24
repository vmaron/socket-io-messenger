import {heroRoutes} from './hero.route';
import {emailRoutes} from './email.route';
import express from 'express';

const router = express.Router();
router.use('/', heroRoutes);
router.use('/', emailRoutes);

export default router;
