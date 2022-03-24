import { data } from './data';
import { Hero } from '../model/hero';

export const addHero = async (hero: Hero): Promise<Hero> => {
	hero.id = data.heroes.length + 1;
	await data.heroes.push(hero);
	return hero;
};

export const updateHero = async (hero: Hero): Promise<Hero> => {
	const index = data.heroes.findIndex(h => h.id === hero.id);
	await data.heroes.splice(index, 1, hero);
	return hero;
};

export const deleteHero = async (id: number): Promise<boolean> => {
	data.heroes = await data.heroes.filter(h => h.id !== id);
	return true;
};

export const getHeroes = async (): Promise<Hero[]> => {
	const heroes = await data.heroes;
	return heroes;
};

