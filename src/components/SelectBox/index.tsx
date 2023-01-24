import React from 'react';
import { SelectBoxProps } from './SelectBox.types';

const SelectBox: React.FC<SelectBoxProps> = ({
  icon,
  text,
  subText,
  onClick,
  isSelected
}) => {
  const selectedClasses = isSelected ? 'bg-neutral-magnolia border-primary-marine_blue' : '';
  return (
    <div 
      className={`border border-solid border-neutral-light_gray flex desktop:flex-col desktop:justify-between gap-2 desktop:gap-0 desktop:min-h-[11rem] desktop:w-1/3 p-4 rounded-xl ${selectedClasses}`}
      onClick={onClick}
    >
      <img src={icon} className="w-16 h-16 self-start" alt="Icon"/>
      <div className="flex flex-col gap-2">
        <p className="font-xl font-extrabold text-primary-marine_blue">{text}</p>
        <p className="font-light text-neutral-cool_gray">{subText}</p>
      </div>
    </div>
  )
};

export default SelectBox;