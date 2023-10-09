import React from 'react';
import './MealsSet.css'

export default function MealsSet({images, name,video}) {
  return (
        <div className='mealsSet-container'>
            <img className='meals-img' src={images} alt="meals"/>
            <p className='meals-name'>{name}</p>
            <button 
                className='meals-button'
                onClick={() => window.open(`${video}`)}
            >Watch Video 
            </button>
        </div>
  )
}
