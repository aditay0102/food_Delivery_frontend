import React, { useContext, useEffect, useState } from 'react'
import "./FoodDisplay.css"


import  {StoreContext} from '../../context/StoreContest.jsx'
import FoodItem from '../FoodItem/FoodItem'
import { food_list } from '../../assets/frontend_assets/assets'

function FoodDisplay({category}) {
  const [foodList,setFoodList] = useState([food_list])

  useEffect(()=>{
    console.log(foodList)
  })
  
  return (
    <div className='food-display' id='food-display' >
      <h1>Top dishes near you</h1>
      
      <div className="food-display-list">
        {
          food_list.map((item,index)=>{ 
            if(category === "All" || category === item.category){
              return(
                <FoodItem key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                 image={item.image} 
                />  
              )

            }
          })
        }
      </div>

    </div>
  )
}

export default FoodDisplay
