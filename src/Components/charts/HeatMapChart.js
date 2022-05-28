import ReactApexChart from "react-apexcharts";

const HeatMapChart = ({data}) => {
    const options  = {
        series: data,
        chart: {
            height: 450,
            type: 'heatmap',
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#2065d1"],
        xaxis: {
            type: 'category',
            categories: ['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM','1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM']
        },
        grid: {
            padding: {
                right: 20
            }
        }
    };

    return (
        <div>
            <ReactApexChart type="heatmap" series={data} options={options} height={364}/>
        </div>
    );
};

export default HeatMapChart;