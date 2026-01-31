import {FiCamera} from "react-icons/fi";
import {IoLocationOutline} from "react-icons/io5";
import {LuCloudUpload} from "react-icons/lu";
import {MdOutlineTimer} from "react-icons/md";

const iconMap = {
  FiCamera: FiCamera,
  IoLocationOutline: IoLocationOutline,
  LuCloudUpload: LuCloudUpload,
  MdOutlineTimer: MdOutlineTimer,
};

const TutorialItem = ({title, description, icon}) => {
  const IconComponent = iconMap[icon];
  
  return (
    <li className='flex gap-4 items-center'>
      <div className='bg-agro-light-green p-3 rounded-full'>
        {IconComponent && <IconComponent color='#263C28' className='w-[30px] h-[30px]' />}
      </div>
      <div>
        <h3 className='text-lg font-semibold'>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default TutorialItem;
