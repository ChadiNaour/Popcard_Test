import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LittleCard from './components/littleCard'
import Table from "./components/Table"
import LineText from "./components/LineText";
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



function App() {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const [age, setAge] = React.useState('');

  const handleChangeDay = (newValue) => {
    setValue(newValue);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };

  const tabledata = [
    { Profile: "Entreprise", "Nb d'utilisateur": 100 },
    { Profile: "Entreprise", "Nb d'utilisateur": 100 },
    { Profile: "Entreprise", "Nb d'utilisateur": 100 },
    { Profile: "Entreprise", "Nb d'utilisateur": 100 },
    { Profile: "Entreprise", "Nb d'utilisateur": 100 },
    { Profile: "Entreprise", "Nb d'utilisateur": 100 }
  ]

  return (
    <div className="bg-[#FFFAF5] w-screen min-h-screen">
      <Sidebar />
      <div className='ml-72 px-40 bg-[#FFFAF5] flex flex-col'>
        <Header />
        <LineText text="Dashboard" icon="material-symbols:dashboard" textSize="2.3rem" iconSize="11" />
        <div className='w-[95%] bg-[#CCB7B7] h-[.5px]'></div>
        <LittleCard title="Profiles Crees" value="10" icon="ion:help-buoy-sharp" color="white" />
        <Table />
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
          <div className='w-full h-[400px]'>

            <Line options={options} data={data} />
          </div>
          {/* <div className='w-11 h-11 rounded-full bg-primaryBrown flex justify-center items-center'>
            <Icon icon={icon} className="text-white h-7 w-7" />
          </div>
          <div className='h-full flex flex-col justify-center items-start'>
            <span className='text-xl font-Puplic_Sans'>{title}</span>
            <span className='text-2xl font-Steradian_md'>{value}</span>
          </div> */}
        </Card>
      </div>
    </div>
  );
}

export default App;
