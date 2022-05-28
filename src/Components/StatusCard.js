import React from 'react';
import {alpha, styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import {Card, Divider} from "@mui/material";

const IconWrapperStyle = styled('div')(({theme}) => ({
    margin: 'auto',
    display: 'flex',
    borderRadius: '10%',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    justifyContent: 'center',
    // marginBottom: theme.spacing(3)
}));

const StatusCard = ({title, count, color, bgColor, icon, ...other}) => {
    return (
        <div>
            <Card
                sx={{
                    py: 5,
                    borderRadius: '0',
                    textAlign: 'center',
                    color: color,
                    bgcolor: bgColor,
                    boxShadow: 0
                }}
                {...other}
            >
                <IconWrapperStyle>
                    {icon}
                </IconWrapperStyle>

                <Typography variant="h3" style={{fontWeight: 700, lineHeight: 1.5, fontSize: '2.5rem', fontFamily: 'sans-serif'}}>{count}</Typography>

                <Typography variant="subtitle2" sx={{opacity: 0.72}}>
                    {title}
                </Typography>
            </Card>
        </div>
    );
};

export default StatusCard;