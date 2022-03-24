import {NextFunction, Request, Response} from 'express';
import {Singleton, SocketCustomEvent} from '../constants';


export const messageCreated = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  req.app.get(Singleton.SOCKET_SERVICE).emit(SocketCustomEvent.MSG_CREATED, req.body);
  res.status(200).json(req.body);
};
