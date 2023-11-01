import { IconType } from 'react-icons';

interface LinkLogoProps {
    Icon: IconType;
}

const LinkLogo = ({Icon}: LinkLogoProps) => {
  return (
    <span className='inline-block w-auto bg-hv_yellow rounded-full text-black text-2xl p-2 hover:scale-105 cursor-pointer'>
        <Icon />
    </span>
  );
};

export { LinkLogo };