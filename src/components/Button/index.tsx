import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  type='ghost',
  isDisabled,
  text,
  className='',
  onClick
}) => {
  const solidClasses = type === 'primary' ? 'bg-primary-marine_blue rounded-xl' : '';
  const disabledClasses = isDisabled ? 'hover:bg-neutral-cool_gray bg-neutral-cool_gray hover:pointer-events-none hover:cursor-not-allowed' : '';
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
    h-12
    border-solid
    font-bold
    px-6
    grow-0
    shrink-0
    w-[8rem]
    ${solidClasses}
    ${disabledClasses}
    ${className}

  `)
  return (
    <button
      className={`${buttonClasses}`}
      onClick={onClick}
    >{text}</button>
  )
}

export default Button;
