
import PropTypes from 'prop-types';
import Cooks from './Cooks.jsx/Cooks';
const Cook = ({ cook }) => {
    const total= cook.reduce((total,prd)=>total+prd.preparing_time,0)
    const calory=cook.reduce((total,prd)=>total+prd.calories,0)

    return (
        <div className="mt-2 p-4 border-b-2 ">
            <h3 className="text-3xl font-semibold">Currently Cooking: {cook.length}</h3>
            <div className="relative overflow-x-auto ">
                <table className=" w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs uppercase">
                        <tr className=''>
                            <th className='px-1 py-4'></th>
                            <th className='px-1 py-4'>Name</th>
                            <th className='px-1 py-4'>Time</th>
                            <th className='px-1 py-4'>Calories</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {cook.map((data,idx)=><Cooks key={idx} num={idx} cooks={data}></Cooks>)}
                          
                    </tbody>
                </table>
            </div>
            <div className='flex justify-end gap-7 p-2 mt-2 text-gray-500 font-medium'>
                <h3>Total Time: {total} min</h3>
                <h3>Total Calories: {calory} calories</h3>
            </div>
        </div>
    );
};
Cook.propTypes = {
    cook: PropTypes.array

}
export default Cook;