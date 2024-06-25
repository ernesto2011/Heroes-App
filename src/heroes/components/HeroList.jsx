import React from 'react'
import { getHeroesPublisher } from '../helpers'
import { HeroCard } from './'
import { useMemo } from 'react'

export const HeroList = ({publisher}) => {
    const heroes = useMemo(()=> getHeroesPublisher(publisher),[publisher]) 
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {
            heroes.map(heroe => (
                <HeroCard key={heroe.id} {...heroe} />
            ))
        }
    </div>
  )
}
