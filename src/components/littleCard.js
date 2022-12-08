import { Icon } from '@iconify/react';
import Card from '@mui/material/Card';

const LittleCard = ({title, value, icon, color}) => {
            return (
            <Card sx={{ borderRadius: '20px' }} className={`flex flex-row gap-4 justify-start items-center pl-5 bg-${color} w-60 h-28`}>
            <div className='w-11 h-11 rounded-full bg-primaryBrown flex justify-center items-center'>
              <Icon icon={icon} className="text-white h-7 w-7" />
            </div>
            <div className='h-full flex flex-col justify-center items-start'>
              <span className='text-xl font-Puplic_Sans'>{title}</span>
              <span className='text-2xl font-Steradian_md'>{value}</span>
            </div>
          </Card>
            )

}
export default LittleCard;