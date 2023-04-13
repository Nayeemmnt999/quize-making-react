// import React, { useEffect, useState } from 'react';
import img1 from '../../img/rsz_12download_3.jpg';
import img2 from '../../img/rsz_515699-lake-environment-digital_art.jpg';
import img3 from '../../img/rsz_dsc00319.jpg';
import { useLoaderData } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import './Home.css'
// import HomeComponent from './HomeComponent';
const Home = () => {
    const quize = useLoaderData().data;
    // const quizee = quize.data

    return (
        <div>
            <div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src={img1} alt="" className="w-full" />

                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={img2} alt="" className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={img3} alt="" className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={img2} alt="" className="w-full" />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-5 justify-items-center mb-20 mt-16 items-center'>
                {
                    quize.map(catagory => <HomeComponent
                        key={catagory.id}
                        catagory={catagory}
                    ></HomeComponent>)
                }

            </div>
        </div>
    );
};

export default Home;