import React from 'react';
import { LineChart, CartesianGrid, XAxis, Line, YAxis } from 'recharts';

const Static = ({quize}) => {
    console.log(quize.total);
    const inf = {
        name: quize.name,
        uv: quize.total,
        // pv: data.pv,
        // amt: data.amt
    }
    return (
        <div>
  <LineChart width={500} height={300} data = {quize} >
                <XAxis dataKey={"name"} />
                <YAxis />
                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Static;