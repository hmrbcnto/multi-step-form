import React from 'react';
import { twMerge } from 'tailwind-merge';
import Step from './Step';
import { StepsProps } from './Steps.types';

const Steps: React.FC<StepsProps> = ({
  steps,
  activeStep
}) => {
  const baseClasses = twMerge(`
    desktop:bg-steps-image-desktop
    desktop:w-1/3
    desktop:h-full
    desktop:flex
    desktop:p-2
    desktop:rounded-2xl
    bg-steps-image-mobile
    flex flex-col
    h-[15%]
    bg-cover
    bg-no-repeat
  `);
  return (
    <div className={`${baseClasses}`}>
      <div className="flex desktop:flex-col desktop:pl-6 pt-8 gap-4 justify-center desktop:justify-start">
        {steps.map((step) => (<Step 
            stepName={step.stepName} 
            stepNumber={step.stepNumber} 
          />))}
      </div>
    </div>
  )
}

export default Steps;