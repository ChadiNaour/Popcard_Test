import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import Card from '@mui/material/Card';
import { fr } from 'faker/lib/locales';
import moment from 'moment';
import 'moment/locale/fr';


const Header = () => {

  moment.locale('fr');

  const today = moment().locale('fr').format('LLLL').split(' ').splice(0, 4).toString().replaceAll(',', ' ');

  return (
    <div className="w-full h-48 flex justify-between items-center">
      <div className='h-full flex flex-col justify-center gap-1 items-start'>
        <span className='text-4xl font-Steradian_md'>Bonjour Aymane !</span>
        <span className='text-lg font-Puplic_Sans'>Nous somme le {today}</span>
      </div>
      <div className="h-full flex justify-end items-center -mt-6">
        <Card sx={{ borderRadius: '40px' }}
          className="bg-white mx-2 p-1 pl-4"
        >
          <div className="flex justify-center items-center cursor-pointer gap-5 ">
            <div className="text-primaryWhite text-2xl mr-6">
              <div className="cursor-pointer"><span className="flex flex-row items-start font-Steradian_rg"><Icon icon="ion:help-buoy-sharp" className="text-primaryRed h-7 w-7  mr-2" />Aide</span></div>
            </div>
            <div>
              <img className="flex justify-center items-center h-14 w-14 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1578264327029-e2b04b0703e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )

}

export default Header;