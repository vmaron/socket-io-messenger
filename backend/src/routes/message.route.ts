import express from 'express';
import {messageController} from '../controllers';

const router = express.Router();

router.post('/messages/:id', messageController.messageCreated);

export const messageRoutes = router;
