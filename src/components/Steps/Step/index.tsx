import React from 'react';
import { twMerge } from 'tailwind-merge';
import { StepsItem } from '../Steps.types';

const Step: React.FC<StepsItem> = ({
  isActive,
  stepName,
  stepNumber
}) => {
  const activeClasses = isActive ? 'bg-neutral-white text-primary-pastel_blue' : '';
  const twClasses = twMerge(`
    flex 
    border-solid 
    border-neutral-white 
    border-2 
    text-neutral-white 
    rounded-full 
    justify-center 
    items-center 
    w-10 
    h-10
    ${activeClasses}
  `);

  return (
    <div className="flex gap-4 items-center">
      <div className={`${twClasses}`}>
        {stepNumber}
      </div>
      <div className={`hidden desktop:block`}>
        <p className="font-light text-neutral-light_gray"> STEP {stepNumber}</p>
        <p className="font-extrabold text-neutral-light_gray">{stepName.toUpperCase()}</p>
      </div>
    </div>
  )
}

export default Step;
