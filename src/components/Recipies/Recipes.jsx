import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipie/Recipe";
import PropTypes from 'prop-types';


const Recipes = ({handleCart}) => {
    const [cards, setCard]=useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCard(data))


    },[])

    return (
        <div className="md:w-2/3 grid grid-cols-2 gap-4 ">
            {
                cards.map(card=><Recipe handleCart={handleCart}key={card.recipe_id} card={card}></Recipe>)
            }

        </div>
    );
};
Recipes.propTypes ={
    handleCart: PropTypes.func
    
}
export default Recipes;