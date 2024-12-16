import React, { useEffect, useState } from 'react';
import './Style.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Selecteditem() {
  const [selecteddish, setDish] = useState(null);
  const { i } = useParams();

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes")
      .then((res) => {
        const dish = res.data.recipes.find(item => item.id === parseInt(i));
        setDish(dish);
        console.log(res.data.recipes[i]); // Correctly logging the fetched dish
      })
      .catch((err) => {
        console.log(err);
      });
  }, [i]); // Ensure useEffect runs when i changes

  return (
    <div className='cardcontents'>
    <div className='selected'>
      {selecteddish ? (
        <div>
          <img src={selecteddish.image} alt="" width="400" height="auto" />
          <h1>{selecteddish.name}</h1>
          {/* <p id="level" style={selecteddish.difficulty === 'Easy' ? { backgroundColor: "green", width: "50px", color: "white" } : { backgroundColor: "yellow", width: "80px", color: "black" }}>{selecteddish.difficulty}</p> */}
          <p className="stime">
            <span className="icon">⏲</span> {selecteddish.cookTimeMinutes} minutes
          </p>
          <ul>
            <li><span>Meal Type:</span> {selecteddish.mealType}</li>
            <li><span>Serving:</span> {selecteddish.servings}</li>
            <li><span>Tags:</span> {selecteddish.tags.join(', ')}</li>
            <li><span>Rating:</span> {selecteddish.rating}</li>
          </ul>
          <div className="insec">
          <div className='ingredients'>
            <h1>Ingredients</h1>
           
            <ul id='indlist'>
              {selecteddish.ingredients.map((ingredient, index) => (
                <li key={index} style={{ listStyle: "square" }}>▶{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className='instruction'>
            <h1>Instruction</h1>
       
            <ul id='indlist'>
              {selecteddish.instructions.map((instruction, index) => (
                <li key={index} style={{ listStyle: "square" }}>⇒   {instruction}</li>
              ))}
            </ul>
          </div>
          </div>
        </div>
      ) : <h1 style={{color:'white'}}>No dish selected</h1>}
    </div>
    </div>
  );
}