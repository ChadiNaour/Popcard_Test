import { Icon } from '@iconify/react';
import Card from '@mui/material/Card';

const LittleCard = ({ title, value, icon, type }) => {
  return (
    <Card sx={{ borderRadius: '20px' }} style={type ? {backgroundColor: "#FFEDDA"} : {backgroundColor: "white"}} className={`flex flex-row gap-4 justify-start items-center p-5 w-full h-28`}>
      <div className='w-11 h-11 rounded-full bg-primaryBrown flex justify-center items-center'>
        <Icon icon={icon} className="text-white h-7 w-7" />
      </div>
      <div className='h-full flex flex-col justify-center items-start'>
        <span className='text-lg font-Puplic_Sans'>{title}</span>
        <span className='text-2xl font-Steradian_md'>{value}</span>
      </div>
    </Card>
  )

}
export default LittleCard;