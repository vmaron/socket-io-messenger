import {NextFunction, Request, Response} from 'express';
import {Singleton, SocketCustomEvent} from '../constants';
import {UUID} from 'angular2-uuid';
import {SocketEmail} from '../model/socket-email';

export const emailCreated = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {messageId, recipient, sender, subject, attachments, publisherId} = req.body;

  const socketEmail: SocketEmail = {
    eventId: UUID.UUID(),
    eventTime: new Date(),
    correlationId: publisherId,
    data: {
      messageId, sender, recipient, subject, attachments
    }
  };

  req.app.get(Singleton.SOCKET_SERVICE).emit(SocketCustomEvent.EMAIL_CREATED, socketEmail);
  res.status(200).json(socketEmail);
};
