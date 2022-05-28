import ReactApexChart from "react-apexcharts";
import {merge} from "lodash";
import BaseOptionChart from "../../BaseOptionChart";
import numeral from "numeral";
import {styled, useTheme} from "@mui/material/styles";

const CHART_HEIGHT = 340;
const LEGEND_HEIGHT = 100;
const ChartWrapperStyle = styled('div')(({theme}) => ({
    height: CHART_HEIGHT,
    marginTop: theme.spacing(5),
    '& .apexcharts-canvas svg': {height: CHART_HEIGHT},
    '& .apexcharts-canvas svg,.apexcharts-canvas foreignObject': {
        overflow: 'visible',
    },
    '& .apexcharts-legend': {
        height: LEGEND_HEIGHT,
        alignContent: 'center',
        position: 'relative !important',
        borderTop: `solid 1px ${theme.palette.divider}`,
        top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
    },
}));

const PieChart = ({data}) => {
    const chartPieSeries = data.map((i) => i.value);
    const chartPieLabels = data.map((i) => i.label);
    const chartPieOptions = merge(BaseOptionChart(), {
        colors: [
            '#d1c561',
            "#6e61ad",
            "#826af9",
            "#447e46",
            "#d11816"],
        labels: chartPieLabels,
        stroke: {colors: ['#ffffff']},
        legend: {floating: true, horizontalAlign: 'center'},
        dataLabels: {enabled: true, dropShadow: {enabled: false}},
        tooltip: {
            shared: true,
            intersect: false,
            fillSeriesColor: false,
            y: {
                formatter: (seriesName) => numeral(seriesName).format(),
                title: {
                    formatter: (seriesName) => `${seriesName}`,
                },
            },
        },
        plotOptions: {
            pie: {donut: {labels: {show: false}}},
        },
    });

    return (
        <div>
            <ChartWrapperStyle dir="ltr">
                <ReactApexChart type="pie" series={chartPieSeries} options={chartPieOptions} height={280}/>
            </ChartWrapperStyle>

        </div>
    );
};

export default PieChart;