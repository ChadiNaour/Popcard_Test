import React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const Charts = () => {
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [age, setAge] = React.useState('');

    const handleChangeDay = (newValue) => {
        setValue(newValue);
    };

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };
    return (
        <Card sx={{ borderRadius: '20px' }} className={`flex flex-col gap-5 justify-start items-center p-5 bg-white w-[900px]`}>
            <div className='w-full h-40  flex flex-row justify-start items-center gap-16'>
                <div className='h-40 flex flex-col justify-center items-start gap-2'>
                    <div className='font-Steradian_md text-primaryBrown flex flex-row items-start'>
                        date de debut
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/DD/YYYY"
                            value={value}
                            onChange={handleChangeDay}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                <div className='h-40 flex flex-col justify-center items-start gap-2'>
                    <div className='font-Steradian_md text-primaryBrown flex flex-row items-start'>
                        date de debut
                    </div>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChangeAge}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='h-40  flex flex-col justify-center items-start gap-2'>
                    <div className='font-Steradian_md text-primaryBrown flex flex-row items-start'>
                        date de debut
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="Date desktop"
                            inputFormat="MM/DD/YYYY"
                            value={value}
                            onChange={handleChangeDay}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
            </div>
            <div className='flex w-full justify-center'>

                <Line options={options} data={data} className="w-full h-full" />
            </div>
        </Card>
    )

}
export default Charts;