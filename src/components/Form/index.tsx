import React from 'react';
import { twMerge } from 'tailwind-merge';
import { StepConstants } from '../../constants/Steps';
import Steps from '../Steps';

const Form: React.FC = () => {
  const formClasses = twMerge(`
    w-full
    h-screen 
    desktop:h-[60vh]
    desktop:w-[60vw]
    bg-neutral-white 
    drop-shadow-lg
    desktop:p-4 
    rounded-3xl
  `);

  return(
    <div className={`${formClasses}`}>
      <Steps 
        steps={StepConstants}
      />
    </div>
  );
};

export default Form;
