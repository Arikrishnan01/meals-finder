import React, { useState } from 'react';
import './AddMeals.css';
import { useNavigate } from 'react-router-dom';

export default function AddMeals() {

    const navigate = useNavigate();
    const [ mealsImage, setMealsImg ] = useState("");
    const [ mealsName, setMealsName ] = useState("");
    const [ mealsVideo, setMealsVedio ]  = useState("");

    //add the new meals to db
    const addMeals = () => {
        const addNewMeals = {
            mealsImage,
            mealsName,
            mealsVideo
        }
        fetch(`https://meals-finder-ten.vercel.app/meals/createMeals`,{
            method: "POST",
            body: JSON.stringify(addNewMeals),
            headers: {
                "Content-type": "application/json",
            }
        })
        .then((response) =>{
            response.json()
            console.log(response);
        })
        navigate(`/`)
        
    }

  return (
    <div className='measl-containers'>
        <div className="topBackContaier">
            <button 
                className="backButton"
                onClick={() => navigate("/")}
            >Back</button>
            <h3 className="topTitle">ADD NEW MEALS</h3>
        </div>
        <div className="meals-Form">
            <div className='meals-itemss'>
            <label>MealsImage</label>
            <input 
                type='text'
                className="mealsInputField"
                placeholder='Enter the img url'
                value={mealsImage}
                onChange={(event) => setMealsImg(event.target.value)}
            />
            </div>
            <div className='meals-itemss'>
            <label>MealsName</label>
            <input
                type='text' 
                className="mealsInputField"
                placeholder='Enter the meals name'
                value={mealsName}
                onChange={(event) => setMealsName(event.target.value)}
            />
            </div>

            <div className='meals-itemss'>
            <label>MealsVideo</label>
            <input
                type='text' 
                className="mealsInputField"
                placeholder='Enter the meals vedio url'
                value={mealsVideo}
                onChange={(event) => setMealsVedio(event.target.value)}
            />
            </div>
            <button 
                className="addMealsButtonBottom"
                 onClick={() => {
                    addMeals()
                    
                 }}          
            >Create Meals</button>
        </div>

</div>
  )
}
