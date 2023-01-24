import React from 'react';
import { twMerge } from 'tailwind-merge';
import { CheckboxProps } from './Checkbox.types';
import checkmark from '../../assets/images/icon-checkmark.svg';

const Checkbox: React.FC<CheckboxProps> = ({
  text,
  subText,
  cost,
  isChecked,
  onChange
}) => {
  const checkedClasses = isChecked ? 'bg-primary-purplish_blue' : '';
  const baseClasses = twMerge(`
    desktop:h-8
    desktop:w-8
    w-4
    h-4
    border
    border-solid
    border-neutral-light_gray
    desktop:rounded-lg
    rounded-md
    flex
    justify-center
    align-center
    p-2
    ${checkedClasses}
  `);
  const selectedBoxClasses = isChecked ? 'bg-neutral-magnolia border-primary-purplish_blue' : '';
  return (
    <div 
      className={`flex gap-1 desktop:gap-4 w-full border border-solid border-neutral-light_gray p-2 desktop:p-6 rounded-lg justify-between items-center align-center hover:border-primary-purplish_blue hover:cursor-pointer ${selectedBoxClasses} grow-0`}
      onClick={onChange}
    >
      <div className={baseClasses}>
        <img src={checkmark} alt="checkmark" className="desktop:object-none object-scale-down" />
      </div>
      <div className="flex flex-col w-full ">
        <p className="font-bold text-primary-marine_blue desktop:text-md text-xs">{text}</p>
        <p className="font-light text-neutral-cool_gray desktop:text-md text-xs">{subText}</p>
      </div>
      <p className="text-primary-marine_blue desktop:font-lg text-xs">{cost}</p>
    </div>
  );
};

export default Checkbox;
