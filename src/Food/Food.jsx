import Recipes from "../components/Recipies/Recipes";
import Carts from '../components/Carts/Carts'
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Food = () => {
    const [cart, setCart] = useState([])

    const handleCart = (card, id) => {
        const isCart = cart.find(data => data.recipe_id == id)
        if (!isCart) {
            const newCart = [...cart, card]
            setCart(newCart)
        }
        else {
            toast("Already Added !")
        }

    }
    const handleRemove = id => {
        const remainingItems = cart.filter(item => item.recipe_id !== id);
        setCart(remainingItems);

    }


    return (
        <div className="max-w-7xl mx-auto">
            <div className="relative mx-auto text-center md:w-1/2 mt-10 p-4 ">
                <h1 className="text-4xl font-semibold p-2">Our Recipes</h1>
                <p className="p-4">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>

            <div className="md:flex max-w-7xl mx-auto">
                <Recipes handleCart={handleCart}></Recipes>
                <Carts cart={cart} handleRemove={handleRemove}></Carts>
            </div>
            <ToastContainer />

        </div>

    );
};
export default Food;