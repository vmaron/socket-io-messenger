import {NextFunction, Request, Response} from 'express';
import heroService from '../services';

export const getHeroesList = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const heroes = await heroService.getHeroes();
  res.status(200).json(heroes);
};

export const addHero = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const hero = {
    id: 0,
    name: req.body.name,
    weapons: req.body.weapons,
    strengths: req.body.strengths
  };

  const newHero = await heroService.addHero(hero);
  res.status(201).json(newHero);
};

export const updateHero = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const hero = {
    id: parseInt(req.params.id),
    name: req.body.name,
    weapons: req.body.weapons,
    strengths: req.body.strength
  };

  const updatedHero = await heroService.updateHero(hero);
  res.status(200).json(updatedHero);
};

export const deleteHero = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const {id} = req.params;

  const deletedHero = await heroService.deleteHero(parseInt(id));
  if (deletedHero) {
    res.status(200).json({});
  }
};

