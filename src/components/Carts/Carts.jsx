
import Cart from '../Cart/Cart';
import PropTypes from 'prop-types';
import Cook from '../Cook/Cook';
import { useState } from 'react';
const Carts = ({ cart , handleRemove}) => {

    const [cook, setCook] = useState([])

    const handleCook = (cart1,id) => {
        console.log("okay")
                console.log("Okay")
                setCook([...cook, cart1]);
                handleRemove(id);
    }
    return (

        // space-y-2 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-lg align-top
        <div className="md:w-1/3 border ml-4  text-center  border-gray-200 bg-white p-4 shadow-lg rounded-lg relative" style={{ height: '620px' }}>
            <div>
                <h3 className="text-3xl font-semibold p-4 border-b-2">Want to cook:{cart.length}</h3>
                <div className="relative overflow-x-auto ">
                    <table className=" w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs uppercase">
                            <tr className=''>
                                <th className='px-1.5 py-4'></th>
                                <th className='px-1 py-4'>Name</th>
                                <th className='px-1 py-4'>Time</th>
                                <th className='px-1.5 py-4'>Calories</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                cart.map((data, idx) => <Cart handleCook={handleCook} key={idx} num={idx} cart1={data}></Cart>)


                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <Cook cook={cook}></Cook>


        </div>
    );
};
Carts.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemove: PropTypes.func
}
export default Carts;