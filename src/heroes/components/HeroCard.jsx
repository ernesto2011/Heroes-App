import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id, superhero, publisher, alter_ego,
    first_appearance, characters,
}) => {
    const heroImgUrl = `https://github.com/ernesto2011/Heroes-App/blob/main/assets/${id}.jpg?raw=true`;
  return (
    <div className='col animate__animated animate__fadeIn'>
        <div className='card'>
            <div className='row no-gutters'>
                <div className="col-4">
                    <img src={heroImgUrl} className='card-img' alt={superhero} loading='lazy' />

                </div>
                <div className='col-8'>
                <div className='card-body'>
                    <h5 className='card-title'>{superhero}</h5>
                    {
                        (alter_ego !== characters ) && <p>{alter_ego}</p>
                    }
                    <p className='card-text'>
                        <small className='text-mutted'>{first_appearance}</small>
                    </p>
                    <Link to={`/hero/${id}`}>
                    Mas...
                    </Link>
                </div>
            </div>
            </div>
            

        </div>
    </div>
  )
}
