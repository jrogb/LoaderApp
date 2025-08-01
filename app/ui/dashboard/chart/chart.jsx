"use client";
import styles from './chart.module.css';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
    { name: 'January', Projected: 0, Actual: 0},
    { name: 'February', Projected: 4000, Actual: 4567},
    { name: 'March', Projected: 8000, Actual: 9132},
    { name: 'April', Projected: 12000, Actual: 14140},
    { name: 'May', Projected: 16000, Actual: 19457},
    { name: 'June', Projected: 20000, Actual: 20940},
    { name: 'July', Projected: 24000, Actual: 23040},
];

const Chart =() => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Projected Monthly Sales</h2>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart width={500} height={300} data={data} margin={
                    {
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
                    <Legend />
                    <Line type="monotone" dataKey="Projected" stroke="#8884d8" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="Actual" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;