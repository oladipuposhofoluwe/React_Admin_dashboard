import './chart.css';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Chart({title, data, dataKey, grid}) {
    return (
        <div className="chart">
            <h2 className="charttitle">{title}</h2>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="mo" dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}


export default Chart;