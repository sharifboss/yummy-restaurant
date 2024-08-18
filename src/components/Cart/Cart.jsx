import PropTypes from 'prop-types';

const Cart = ({ cart1,num,handleCook}) => {
    const { recipe_id,recipe_name, preparing_time, calories } = cart1

    return (
        <tr className='bg-gray-300'>
            <td className='px-1 py-4'>{num + 1}</td>
            <td className='px-1 py-4'>{recipe_name}</td>
            <td className='px-1 py-4' >{preparing_time}</td>
            <td className='px-1 py-4' >{calories}</td>
            <td className='px-1 py-4'>
                <button onClick={()=>handleCook(cart1,recipe_id)}  className='font-bold text-black text-center px-2 py-3  rounded-full bg-green-500 hover:bg-blue-700'>Preparing</button></td>

        </tr>

    );
};

Cart.propTypes = {
    cart1: PropTypes.object,
    num: PropTypes.number,
    handleCook: PropTypes.func

}

export default Cart;