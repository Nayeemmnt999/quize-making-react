import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, CartesianGrid, XAxis, Line } from 'recharts';

const Statistics = () => {
    const quizeData = useLoaderData().data;
    console.log(quizeData);
    return (
        <div>
            {
                
            }
            <LineChart width={500} height={300} >
                <XAxis dataKey="name" />
                {/* <YAxis /> */}
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Statistics;