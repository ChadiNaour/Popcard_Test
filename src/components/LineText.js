import { Icon } from '@iconify/react';

const LineText = ({ text, icon, textSize, iconSize }) => {
    return (
        <div className={`w-full flex flex-row justify-start items-center  text-primaryRed ${textSize}`}><span className="font-Steradian_md text-primaryBrown flex flex-row items-start"><Icon icon={icon} className={`text-primaryRed h-${iconSize} w-${iconSize} mr-2`} />{text}</span></div>
    )
}
export default LineText;