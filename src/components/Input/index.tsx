import React from 'react';
import InputMask from 'react-input-mask';
import { twMerge } from 'tailwind-merge';

import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  title,
  status,
  mask='',
  placeholder,
  id
}) => {
  const valueChange = (value: string | number) => {
    onChange(value);
  };

  const errorClasses = status === 'error' ? 'border-red-600 bg-red-100 border-solid' : '';
  const baseClasses = twMerge(`
    focus:border-primary-marine_blue
    focus:border-solid
    text-base
    border-neutral-cool_gray
    border-solid
    border
    py-2
    px-3
    flex
    justify-content
    box-border
    flex
    flex-col
    items-center
    w-full
    rounded-lg
    flex-none
    self-stretch
    grow-0
    ${errorClasses}
  `)

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex justify-between w-full">
        { title ? <span className="font-extrabold text-primary-marine_blue"> {title} </span> : <></>}
        { status === 'error' ? <span className="font-bold text-primary-marine_blue text-red-500 self-end"> This field is required. </span> : <></>}
      </div>
      <InputMask
        className={`${baseClasses}`}
        mask={mask}
        maskChar={null}
        placeholder={placeholder}
        alwaysShowMask={true}
        id={id}
        value={value}
        onChange={(e) => valueChange(e.target.value)}
      />
    </div>
  )
}


export default Input;
