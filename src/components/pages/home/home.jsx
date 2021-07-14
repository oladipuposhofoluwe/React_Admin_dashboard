// import React from 'react';
import FeaturedInfo from '../../featuredinfo/featuredinfo';
import Chart from '../../chart/chart';
import { userData } from '../../../dummyData';
import WidgetSm from '../../widgetSM/widgetSm';
import WidgetLg from '../../widgetLG/widgetLg';
import './home.css'

function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title={"User Analytics"} grid dataKey={"Active User"} />
            <div className="homewidget">
            <WidgetSm />
            <WidgetLg />
            </div>
        </div>
    )
}


export default Home;