import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistics = () => {

    const [info, setInfo] = useState([]);
    // console.log(info);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const dataLoder = data.data.data;
                // console.log(dataLoder.data);
                // const  dataDataLoader = dataLoder.data;

                const loaded =  dataLoder.map(data => {

                    const inf = {
                        name: data.name,
                        uv: data.total,
                        pv: data.pv,
                    }
                    return inf;
                })
                setInfo(loaded)
                // console.log(loaded);
            })
    }, [])

    return (
        <div className=' mt-10'>
            <LineChart width={1530} height={300} data={info}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                <Line type="monotone" dataKey="amt" stroke="#82ca9d" />

            </LineChart>
        </div>
    );
};

export default Statistics;