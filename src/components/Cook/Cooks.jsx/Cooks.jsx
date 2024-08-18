
import PropTypes from 'prop-types';
const Cooks = ({cooks,num}) => {
    const { recipe_name, preparing_time, calories } = cooks
   
    return (
        <tr className='bg-gray-300'>
            <td className='px-1 py-4'>{num + 1}</td>
            <td className='px-1 py-4'>{recipe_name}</td>
            <td className='px-1 py-4' >{preparing_time}</td>
            <td className='px-1 py-4' >{calories}</td>
        

        </tr>
    );
};
Cooks.propTypes = {
    cooks: PropTypes.object.isRequired,
    num: PropTypes.number,
}
export default Cooks;