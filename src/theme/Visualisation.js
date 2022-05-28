import React from 'react';
import StatusCard from "../Components/StatusCard";
import HeatMapChart from "../Components/charts/HeatMapChart";
import PieChart from "../Components/charts/PieChart";
import LineChart from "../Components/charts/LineChart";
import BarChart from "../Components/charts/BarChart";
import Users from "../Components/Users";
import ChartWrapper from "../Components/ChartWrapper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CancelScheduleSendIcon from '@mui/icons-material/CancelScheduleSend';
import {FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import DAY_TIME_SERIES from '../mock/dayTimeSeries';

const Visualisation = () => {
    const [timeline, setTimeline] = React.useState('');

    const handleChange = (event) => {
        setTimeline(event.target.value);
    };

    return (
        <>
            <Box>
                <Container maxWidth="xl">
                    <Typography variant="h4" sx={{mt: 8, mb: 5, fontWeight: 700, fontSize: '1.5rem'}}>
                        Hi, Welcome back
                        <FormControl sx={{m: 1, minWidth: 80, float: 'right'}}>
                            <InputLabel id="demo-simple-select-autowidth-label">Daily</InputLabel>
                            <Select
                                labelId="demo-simple-select-autowidth-label"
                                id="demo-simple-select-autowidth"
                                value={timeline}
                                onChange={handleChange}
                                autoWidth
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Daily</MenuItem>
                                <MenuItem value={21}>Weekly</MenuItem>
                                <MenuItem value={22}>Monthly</MenuItem>
                            </Select>
                        </FormControl>
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={6}>
                            <StatusCard title={'Best time to sent mail'} count={'Night'} color={'#061752'}
                                        bgColor={'#d1e9fc'} icon={<ContactMailIcon fontSize="large"/>}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <StatusCard title={"Best day to sent mail"} count={'Saturday'} color={'#04297a'}
                                        bgColor={'#d0f2ff'} icon={<MarkEmailReadIcon fontSize="large"/>}/>
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <StatusCard title={'Total Email'} count={'125'} color={'#061752'} bgColor={'#d1e9fc'}
                                        icon={<ContactMailIcon fontSize="large"/>}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <StatusCard title={"Emails Success"} count={'104'} color={'#04297a'} bgColor={'#d0f2ff'}
                                        icon={<MarkEmailReadIcon fontSize="large"/>}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <StatusCard title={"Emails Pending"} count={'20'} color={'#7a4f01'} bgColor={'#fff7cd'}
                                        icon={<ReportGmailerrorredIcon fontSize="large"/>}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <StatusCard title={'Emails Failed'} count={"1"} color={'#7a0c2e'} bgColor={'#ffe7d9'}
                                        icon={<CancelScheduleSendIcon fontSize="large"/>}/>
                        </Grid>

                        <Grid item xs={12} md={6} lg={12}>
                            <ChartWrapper title={'Email highlight [Days vs Time]'} Component={
                                <HeatMapChart data={DAY_TIME_SERIES}/>}
                            />
                        </Grid>

                        <Grid item xs={12} md={6} lg={8}>
                            <ChartWrapper title={'Email Engagement by day of week'}
                                          Component={<BarChart data={[
                                              {
                                                  name: "Open Rate",
                                                  data: [64, 55, 21, 18, 76, 41, 44]
                                              },
                                              {
                                                  name: "Click Rate",
                                                  data: [53, 32, 42, 22, 29, 80, 16]
                                              }
                                          ]}/>}/>
                        </Grid>
                        <Grid item xs={12} md={6} lg={4}>
                            <ChartWrapper title={'Percentage of Email sent'}
                                          Component={<PieChart data={[
                                              {label: 'Morning', value: 50},
                                              {label: 'Afternoon', value: 40},
                                              {label: 'Evening', value: 30},
                                              {label: 'Night', value: 10},
                                          ]}/>}/>
                        </Grid>

                        <Grid item xs={12} md={6} lg={12}>
                            <ChartWrapper title={'Email Engagement by hour of day'}
                                          Component={<LineChart data={[
                                              {
                                                  name: "Open Rate",
                                                  data: [75, 85, 95, 75, 76, 95, 88, 71, 85, 94, 76, 84, 75, 76, 84, 96, 84, 76, 70, 76, 95, 85, 74, 86]
                                              },
                                              {
                                                  name: "Click Rate",
                                                  data: [10, 18, 17, 12, 9, 7, 15, 19, 22, 20, 21, 18, 16, 19, 10, 6, 4, 15, 11, 18, 16, 11, 24, 15]
                                              }
                                          ]}/>}/>
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <Users/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Visualisation;