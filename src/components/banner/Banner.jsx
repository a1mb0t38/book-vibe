import React from 'react';
import Bookimg from '../../assets/hero_img.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh] mt-5 container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse gap-24 w-full">
                    <img
                        src={Bookimg}
                        className="max-w-sm rounded-lg shadow-2xl w-full"
                    />
                    <div className='text-center md:text-left'>
                        <p className="py-6 font-bold text-6xl
                         text-black leading-20 ">
                            Books to freshen up <br /> your bookshelf
                        </p>
                        <button className="btn btn-success font-semibold text-[20px] text-white mt-9">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner; <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
        </div>
    </div>
</div>