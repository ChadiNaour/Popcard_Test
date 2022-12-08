import { Icon } from '@iconify/react';

const Header = () => {
            return (
            <div className="absolute top-0 left-72 right-0 h-48 flex justify-between px-14 items-center">
            <div className='h-full flex flex-col justify-center gap-2 items-start'>
                        <span className='text-4xl'>Bonjour Aymane</span>
                        <span className='text-xl'>Nous somme le Samedi 3 Decembre 2022</span>
            </div>
        <div className="h-full flex justify-end items-center">
          <div
            className="rounded-full bg-white shadow-xl mx-2 p-1 pl-4"
          >
            <div className="flex justify-center items-center cursor-pointer ">
              <div className="text-primaryWhite text-2xl mr-6">
                <div className="cursor-pointer"><span className="flex flex-row items-start"><Icon icon="ion:help-buoy-sharp" className="text-primaryRed h-7 w-7  mr-2" />Aide</span></div>
              </div>
              <div>
                <img className="flex justify-center items-center h-14 w-14 rounded-full"
                      src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                      alt="new"
                      />
              </div>
            </div>
          </div>
        </div>
      </div>
            )

}

export default Header;