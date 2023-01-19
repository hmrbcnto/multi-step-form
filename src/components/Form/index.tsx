import React from 'react';
import { twMerge } from 'tailwind-merge';
import { StepConstants } from '../../constants/Steps';
import Steps from '../Steps';
import InformationForm from './InformationForm';
import { useRegistrationForm } from '../../contexts/FormContext';
import PlanForm from './PlanForm';
import AddonForm from './AddOnForm';

const Form: React.FC = () => {
  const { registration } = useRegistrationForm();
  const formClasses = twMerge(`
    w-full
    h-screen 
    desktop:h-[60vh]
    desktop:w-[60vw]
    bg-neutral-white 
    drop-shadow-lg
    desktop:p-4 
    rounded-3xl
    flex
    flex-col
    desktop:flex-row
    desktop:gap-8
  `); 

  const formComponent = () => {
    switch(registration?.currentStep) {
      case 'information':
        return <InformationForm />
      case 'plan':
        return <PlanForm />;
      case 'add-ons':
        return <AddonForm />;
      default:
        return <InformationForm />
    }
  }

  return(
    <div className={`${formClasses}`}>
      <Steps 
        steps={StepConstants}
        activeStep={registration?.currentStep}
      />
      <div className="w-full mx-auto">
        {
          formComponent()
        }
      </div>
    </div>
  );
};

export default Form;
