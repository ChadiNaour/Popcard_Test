import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LittleCard from './components/littleCard'
import { Icon } from '@iconify/react';
import Card from '@mui/material/Card';
import Table from "./components/Table"


function App() {
  const tabledata = [
    {Profile: "Entreprise", "Nb d'utilisateur": 100 },
    {Profile: "Entreprise", "Nb d'utilisateur": 100 },
    {Profile: "Entreprise", "Nb d'utilisateur": 100 },
    {Profile: "Entreprise", "Nb d'utilisateur": 100 },
    {Profile: "Entreprise", "Nb d'utilisateur": 100 },
    {Profile: "Entreprise", "Nb d'utilisateur": 100 }
  ]

  return (
    <div className="bg-[#FFFAF5] w-screen min-h-screen">
      <Header />
      <Sidebar />
      <div className='mt-48 ml-72 pl-14'>
        <div className="w-full flex flex-row justify-start items-center  text-primaryRed text-[2.3rem]"><span className="font-Steradian_md text-primaryBrown flex flex-row items-start"><Icon icon="material-symbols:dashboard" className="text-primaryRed h-11 w-11 mr-2" />Dashboard</span></div>
        <div className='w-[95%] bg-[#CCB7B7] h-[.5px]'></div>
        <LittleCard title="Profiles Crees" value="10" icon="ion:help-buoy-sharp" color="white" />
        <Table />

      </div>
    </div>
  );
}

export default App;
