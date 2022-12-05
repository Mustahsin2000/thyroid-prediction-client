import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItem.css'
const BannerItem = ({slide}) => {
    const {Image,id,prev,next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className='carousol-img'>
                <img src={Image} alt="" className=" rounded-lg w-screen" />
            </div>
            <div className="absolute flex justify-end  transform -translate-y-1/2 left-24  top-1/4 ">
                <h1 className='text-6xl font-bold text-white '>
                    Predict Your<br />
                    <span className='text-red-600'>Thyroid</span> For Your <br />
                    Better Health
                </h1>
            </div>
            <div className="absolute flex justify-end  transform -translate-y-1/2 left-24 w-1/2  top-2/4 ">
                <p className='text-white text-xl'>Thyroid disease is a major cause of formation in medical diagnosis and in theprediction, onset to which it is a difficult axiomin the medical research. </p>
            </div>
            <div className="absolute flex justify-start  transform -translate-y-1/2 left-24 w-1/2  top-2/3 ">
                <Link to='/prediction'><button className="btn btn-error mr-5 text-white rounded">Prediction</button></Link>
                <button className="btn btn-outline btn-error text-white">SignUp</button>
            </div>
            <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-orange-500">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;