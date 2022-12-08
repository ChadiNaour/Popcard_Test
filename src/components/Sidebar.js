import { Icon } from '@iconify/react';
import dashboardLogo from "../images/dashboardLogo.svg"


const Sidebar = () => {
  return (
    <>
    
      <div className="fixed top-0 left-0 h-full w-72 bg-white z-40">
        <div className="absolute top-0 left-0 w-full h-40 p-1 bg-white  flex flex-col justify-center items-center">
          <img className="h-16" src={dashboardLogo} />
        </div>
        <div className="absolute top-[20vh] left-0 w-full pl-12 h-auto flex flex-col justify-center items-center">
            <>
              <div className="w-full flex flex-row justify-start p-3 items-center  text-primaryRed text-xl"><span className="flex flex-row items-start"><Icon icon="material-symbols:dashboard" className="text-primaryRed h-7 w-7  mr-2" />Dashboard</span></div>
              <div className="w-full flex flex-row justify-start p-3 items-center  text-primaryRed text-xl"><span className="flex flex-row items-start"><Icon icon="ic:baseline-edit-off" className="text-primaryRed h-7 w-7  mr-2" />Profiles</span></div>
              <div className="w-full flex flex-row justify-start p-3 items-center  text-primaryRed text-xl"><span className="flex flex-row items-start"><Icon icon="mdi:users" className="text-primaryRed h-7 w-7  mr-2" />Utilisateurs</span></div>
              <div className="w-full flex flex-row justify-start p-3 items-center  text-primaryRed text-xl"><span className="flex flex-row items-start"><Icon icon="fluent:live-24-filled" className="text-primaryRed h-7 w-7  mr-2" />Live stats</span></div>
              <div className="w-full flex flex-row justify-start p-3 items-center  text-primaryRed text-xl"><span className="flex flex-row items-start"><Icon icon="ri:user-settings-fill" className="text-primaryRed h-7 w-7  mr-2" />Gestionnaires</span></div>
              <div className="w-full flex flex-row justify-start p-3 items-center  text-primaryRed text-xl"><span className="flex flex-row items-start"><Icon icon="mdi:cart-variant" className="text-primaryRed h-7 w-7  mr-2" />Commands</span></div>
            </>
        </div>
      </div>
    </>
  );
}

export default Sidebar;