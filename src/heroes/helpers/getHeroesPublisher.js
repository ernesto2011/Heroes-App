import { heroes } from "../data/heroes";

export const getHeroesPublisher = (publisher) =>{
    const validPub = ['DC Comics','Marvel Comics']
    if(!validPub.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`);
    }
    return heroes.filter(heroe => heroe.publisher === publisher);

}