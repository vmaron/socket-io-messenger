import express from 'express';
import {emailController} from '../controllers';

const router = express.Router();

router.post('/emails/:id', emailController.emailCreated);

export const emailRoutes = router;
