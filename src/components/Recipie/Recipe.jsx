import PropTypes from 'prop-types';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Recipe = ({ card, handleCart }) => {
    const { recipe_id,recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = card
    // max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700
    const newIng=ingredients.slice(0,3);
    return (
        <div className='space-y-2 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-lg align-top'>
                <img className='rounded-2xl mx-auto' style={{
                    width: '331px',
                    height: '200px',
                }} src={recipe_image} alt="" />
                <div className='space-y-1 p-4 h-28'>
                    <h2 className='text-lg  font-semibold leading-tight'>{recipe_name}</h2>
                    <p className='text-gray-500'><small>{short_description}</small></p>

                </div>
                <div className='p-4 border-t-2 space-y-2 '>
                    <h3 className="2xl font-semibold">Ingredients: {ingredients.length}</h3>
                    <ul className='border-b-2 p-2 text-sm text-gray-500 space-y-2' style={{listStyleType: 'disc', paddingLeft: '20px'}}>
                        {
                            newIng.map((ing,idx)=><li key={idx}>{ing}</li>)
                        }
                    </ul>
                    <div className='flex justify-between text-sm pt-1'>
                        <p>
                            <small className=''><i className="fa-regular fa-clock"></i>  {preparing_time} minutes</small>
                        </p>
                        <p>
                            <small><i className='fa-solid fa-fire-flame-curved'></i>     {calories} calories</small>
                        </p>
                        
                    </div>
                    <button onClick={()=>handleCart(card,recipe_id)} className='border px-4 py-2 bg-green-500 rounded-full text-center hover:bg-gray-100'>Want to Cock</button>

                </div>

        </div>
    );
};
Recipe.propTypes = {
    card: PropTypes.object.isRequired,
    handleCart: PropTypes.func
}
export default Recipe;