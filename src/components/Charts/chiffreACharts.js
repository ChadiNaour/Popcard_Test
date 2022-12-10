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
import LittleCard from '../../components/littleCard'
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

const Charts = ({ charts }) => {
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [age, setAge] = React.useState('');

    const labels = [];
    charts.data.map((elem)=> {
        labels.push(`${elem._id.day}/${elem._id.month}/${elem._id.year}`)
    })

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Chiffre d’affaires',
                data: charts.data.map((elem) => elem.total_ca),
                borderColor: '#4E3131',
                backgroundColor: '#4E3131',
            },
            {
                label: 'Réductions commercial',
                data: charts.data.map((elem) => elem.total_reductions),
                borderColor: '#DAAEAE',
                backgroundColor: '#DAAEAE',
            },
        ],
    };

    const handleChangeDay = (newValue) => {
        setValue(newValue);
    };

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };

    const calculateTotal = (data) => {
            let ret = {totalCA: 0, totalReduction: 0};
            data.map((elem) => {
                        ret.totalCA += elem.total_ca;
                        ret.totalReduction += elem.total_reductions; 
            })
            return ret;
    }

    
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
                <Line data={chartData} className="w-full h-full" />
            </div>
            <div className='flex flex-row justify-start items-center gap-8'>
            <LittleCard title="Total CA sur la période" value={`${calculateTotal(charts.data).totalCA} Dhs`} icon="material-symbols:database" type={1} />
            <LittleCard title="Total réductions sur la periode" value={`${calculateTotal(charts.data).totalReduction} Dhs`} icon="ant-design:percentage-outlined" type={1} />

            </div>
        </Card>
    )

}
export default Charts;