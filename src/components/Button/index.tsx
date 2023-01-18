import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  type='ghost',
  isDisabled,
  text,
  className=''
}) => {
  const solidClasses = type === 'primary' ? 'bg-primary-marine_blue rounded-xl' : '';
  const buttonClasses = twMerge(`
    gap-2
    flex
    flex-row
    justify-center
    align-center
    text-center
    items-center
    hover:cursor-pointer
    hover:bg-primary-strawberry_red
    h-16
    border-solid
    font-bold
    px-6
    grow-0
    shrink-0
    w-[8rem]
    ${solidClasses}
    ${className}
  `)
  return (
    <button
      className={`${buttonClasses}`}
    >{text}</button>
  )
}

export default Button;
