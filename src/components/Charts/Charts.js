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
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Ouverture de Profil',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: '#4E3131',
            backgroundColor: '#4E3131',
        },
        {
            label: 'Ajout aux contacts',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: '#DAAEAE',
            backgroundColor: '#DAAEAE',
        },
    ],
};

const Charts = ({data}) => {
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [age, setAge] = React.useState('');

    const handleChangeDay = (newValue) => {
        setValue(newValue);
    };

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };

    // console.log("charts",data.data);
    return (
        <Card sx={{ borderRadius: '20px' }} className={`flex flex-col gap-5 justify-start items-center p-5 bg-white w-full`}>
            <div className='w-full h-40 px-8  flex flex-row justify-start items-center gap-16 w-full'>
                <div className='h-40 flex flex-col justify-center items-start gap-2'>
                    <div className='font-Steradian_md text-primaryBrown flex flex-row items-start'>
                        Date de debut
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            inputFormat="MM/DD/YYYY"
                            value={value}
                            onChange={handleChangeDay}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                <div className='h-40  flex flex-col justify-center items-start gap-2'>
                    <div className='font-Steradian_md text-primaryBrown flex flex-row items-start'>
                        Date de fin
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            inputFormat="MM/DD/YYYY"
                            value={value}
                            onChange={handleChangeDay}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </div>
                <div className='h-40 flex flex-col justify-center items-start gap-2 w-40'>
                    <div className='font-Steradian_md text-primaryBrown flex flex-row items-start'>
                        Profil
                    </div>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Tout</InputLabel>
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
            </div>
            <div className='flex w-full px-8 pb-4 justify-center  pb-4'>
                <Line data={data} className="w-full h-full" />
            </div>
        </Card>
    )

}
export default Charts;