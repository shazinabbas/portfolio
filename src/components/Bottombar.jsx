import React from 'react';
import { styles } from '../styles';
import { logo, instagram, github1, linkedin } from '../assets';
import { SectionWrapper } from '../hoc';

const BottomBar = () => {
  return (
    <div className={`${styles.paddingX} w-full flex items-center justify-between py-3 fixed bottom-1 z-20 bg-primary`}>
      <p className="text-white text-[10px] sm:text-[14px] font-bold">Links</p>
      <div className="flex items-center justify-center flex-1">
        <a href="https://www.linkedin.com/in/shazinabbas" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <img src={linkedin} alt="logo" className="w-8 h-8 sm:w-7 sm:h-7" />
        </a>
        <a href="https://github.com/shazinabbas" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <img src={github1} alt="logo" className="w-8 h-8 sm:w-7 sm:h-7" />
        </a>
        <a href="https://www.instagram.com/shazz_cb" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
          <img src={instagram} alt="logo" className="w-8 h-8 sm:w-7 sm:h-7" />
        </a>
      </div>
    </div>
  );
};

export default BottomBar
