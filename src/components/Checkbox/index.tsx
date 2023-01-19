import React from 'react';
import { twMerge } from 'tailwind-merge';
import { CheckboxProps } from './Checkbox.types';
import checkmark from '../../assets/images/icon-checkmark.svg';

const Checkbox: React.FC<CheckboxProps> = ({
  text,
  subText,
  value,
  cost,
  isChecked,
  onChange
}) => {
  const checkedClasses = isChecked ? 'bg-primary-purplish_blue' : '';
  const baseClasses = twMerge(`
    h-8
    w-8
    border
    border-solid
    border-neutral-light_gray
    rounded-lg
    flex
    justify-center
    align-center
    p-2
    ${checkedClasses}
  `);
  const selectedBoxClasses = isChecked ? 'bg-neutral-magnolia border-primary-marine_blue' : '';
  return (
    <div 
      className={`flex gap-4 w-full border border-solid border-neutral-light_gray p-6 px-6 rounded-lg justify-between items-center align-center ${selectedBoxClasses}`}
      onClick={onChange}
    >
      <div className={baseClasses}>
        <img src={checkmark} alt="checkmark" className="object-none" />
      </div>
      <div className="flex flex-col w-full">
        <p className="font-bold text-primary-marine_blue font-xl">{text}</p>
        <p className="font-light text-neutral-cool_gray font-xl">{subText}</p>
      </div>
      <p className="text-primary-marine_blue font-lg">{cost}</p>
    </div>
  );
};

export default Checkbox;
