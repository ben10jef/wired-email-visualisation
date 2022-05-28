import React from 'react';
import {Card, CardHeader, Divider} from "@mui/material";
import Box from "@mui/material/Box";

const ChartWrapper = ({title, subheader, Component}) => {
    return (
        <Card>
            <CardHeader title={title} subheader={subheader} style={{fontSize: '1.4rem', fontWeight: '700'}}/>
            <Divider/>
            <Box sx={{p: 3, pb: 1}} dir="ltr">
                {Component}
            </Box>
        </Card>
    );
};

export default ChartWrapper;