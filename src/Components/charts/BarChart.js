import React from 'react';
import {merge} from "lodash";
import BaseOptionChart from "../../BaseOptionChart";
import ReactApexChart from "react-apexcharts";

const BarChart = ({data}) => {
    const options = merge(BaseOptionChart(), {
        xaxis: {
            categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (y) => {
                    if (typeof y !== 'undefined') {
                        return `${y.toFixed(0)} visits`;
                    }
                    return y;
                },
            },
        },
    });
    return (
        <div>
            <ReactApexChart type="bar" series={data} options={options} height={364}/>
        </div>
    );
};

export default BarChart;