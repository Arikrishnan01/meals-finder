import React from 'react';
import './Header.css';
import Meals from '../../Pages/Meals/Meals';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Header() {

  const [meals, setMeals ] = useState([]);
  const [records , setRecords ] = useState([]);

    const getAllMeals = () => {
        fetch(`http://localhost:5000/meals/getAllMeals`)
        .then((response) => response.json())
        .then((meals) => {
            console.log(meals.data);
            setMeals(meals.data);
            setRecords(meals.data);
        })
    }

    const Filter = (event) => {
      setRecords(meals.filter(f => f.mealsName.toLowerCase().includes(event.target.value)))
    }

    useEffect(() => {
        getAllMeals()
    }, []);

  return (
    <div className='header-con'>
        <div className='header-container'>
          <p className='header-title'>Find Meals </p>
          <div className='header-main'>
              <input 
                  type='text'
                  onChange={Filter}
                  className='search-bar'
                  placeholder='search your favourite food....'
              />
              <button 
                  className='search-button'
              >Search</button>
          </div>
        </div>
        <div>
          <Meals records={records}/>
        </div>
    </div>
  )
}
