import { sample } from 'lodash';

// ----------------------------------------------------------------------

const DayTimeSeries = [
    {
        name: 'Sunday',
        data: [...Array(24)].map((_, index) => ({
            x: sample(['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM','1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM']),
            y: sample(['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']),
        }))
    },
    {
        name: 'Monday',
        data: [...Array(24)].map((_, index) => ({
            x: sample(['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM','1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM']),
            y: sample(['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']),
        }))
    },
    {
        name: 'Tuesday',
        data: [...Array(24)].map((_, index) => ({
            x: sample(['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM','1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM']),
            y: sample(['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']),
        }))
    },
    {
        name: 'Wednesday',
        data: [...Array(24)].map((_, index) => ({
            x: sample(['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM','1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM']),
            y: sample(['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']),
        }))
    },
    {
        name: 'Thursday',
        data: [...Array(24)].map((_, index) => ({
            x: sample(['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM','1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM']),
            y: sample(['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']),
        }))
    },
    {
        name: 'Friday',
        data: [...Array(24)].map((_, index) => ({
            x: sample(['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM','1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM']),
            y: sample(['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']),
        }))
    },
    {
        name: 'Saturday',
        data: [...Array(24)].map((_, index) => ({
            x: sample(['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM','1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM']),
            y: sample(['10', '20', '30', '40', '50', '60', '70', '80', '90', '100']),
        }))
    }
];

export default DayTimeSeries;
