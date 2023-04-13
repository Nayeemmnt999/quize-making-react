import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
const HomeComponent = ({catagory}) => {
    // console.log(catagory);
    return (
        <div className='contant border rounded p-8'>
            <img src={catagory.logo} alt="" />
            <p>{catagory.name}</p>
            <p>Total {catagory.total}</p>
            <Link to={`/quiz/${catagory.id}`} className=' border rounded ps-4 pe-4'>Start</Link>
        </div>
    );
};

export default HomeComponent;