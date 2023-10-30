import React from 'react';
import './Meals.css';
import MealsSet from '../MealsSet/MealsSet';
import { useNavigate } from 'react-router-dom';

export default function Meals({records}) {

  const navigate = useNavigate();

  return (
    <div>
      <button 
          className='meals-container-btn'
          onClick={() => navigate("/meals/createMeals")}
        >
            Add Meals
          </button>
      <div className='meals-container'>
              {
                      records.length > 0 &&
                      records.map((allMeals) => {
                      return (
                          <div className='meals-items'>
                              <MealsSet 
                              images={allMeals.mealsImage}
                              name={allMeals.mealsName}
                              video={allMeals.mealsVideo}
                              />
                          </div>
                          // <div>
                          //         <img src={allMeals.mealsImage} alt="meals"/>
                          //         <p>{allMeals.mealsName}</p>
                          //         <button>Watch Video {allMeals.mealsVideo}
                          //             {/* <a href="#" target='_blank' rel='video'>{video}</a> */}
                          //         </button>
                          // </div>
                      )
                  }) 
              }
      </div>
    </div>
  )
}
