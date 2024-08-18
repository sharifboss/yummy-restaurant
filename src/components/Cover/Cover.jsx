import cover from '../../image/Rectangle 1.png';

const Cover = () => {
    return (
        <div>
            <div
                className="max-w-7xl mx-auto relative flex justify-center items-center rounded-3xl"
                style={{
                    backgroundImage: `url(${cover})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '1320px',
                    height: '600px',
                }}
            >
                <div className='text-center absolute text-white' style={{ maxWidth: '60%' }}>
                    <h2 className="text-5xl font-semibold mb-4 leading-tight ">Discover an exceptional cooking class tailored for you!</h2>
                    <p className='mb-6 leading-relaxed'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    <div className='flex justify-center space-x-4 '>
                        <button className='bg-green-600 py-3 px-4 rounded-full text-black text-lg font-medium hover:bg-white'>Explore Now</button>
                        <button className='bg-transparent font-medium border rounded-full py-3 px-4 hover:bg-green-600'>Our Feedback</button>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Cover;
