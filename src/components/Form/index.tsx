import React from 'react';
import { twMerge } from 'tailwind-merge';
import { StepConstants } from '../../constants/Steps';
import Steps from '../Steps';
import InformationForm from './InformationForm';
import { useRegistrationForm } from '../../contexts/FormContext';
import PlanForm from './PlanForm';
import AddonForm from './AddOnForm';
import SummaryForm from './SummaryForm';
import ThankYou from './ThankYou';

const Form: React.FC = () => {
  const { registration } = useRegistrationForm();
  const formClasses = twMerge(`
    w-full
    h-full
    desktop:h-[60vh]
    desktop:w-[60vw]
    desktop:bg-neutral-white
    bg-neutral-light_gray
    drop-shadow-lg
    desktop:p-4 
    rounded-3xl
    flex
    flex-col
    desktop:flex-row
    desktop:gap-8
    desktop:relative
  `); 

  const responsiveClasses = twMerge(`
    z-10
    desktop:z-0
    absolute
    top-24
    desktop:top-0
    desktop:relative
    desktop:mt-0
    border border-solid border-neutral-magnolia
    desktop:border
    desktop:border-none
    desktop:drop-shadow-none
    bg-neutral-white
    mx-6
    desktop:mx-2
    flex
    justify-center
    rounded-xl
    drop-shadow-md
    min-h-[30%]
    desktop:h-full
  `);

  const formComponent = () => {
    switch(registration?.currentStep) {
      case 'information':
        return <InformationForm />
      case 'plan':
        return <PlanForm />;
      case 'add-ons':
        return <AddonForm />;
      case 'summary':
        return <SummaryForm />;
      case 'thank-you':
        return <ThankYou />;
      default:
        return <InformationForm />
    }
  };

  return(
    <div className={`${formClasses}`}>
      <Steps 
        steps={StepConstants}
        activeStep={registration?.currentStep}
      />
      <div className="w-full mx-auto">
        <div className={`flex flex-col p-8 gap-4 ${responsiveClasses} grow-0`}>
          {
            formComponent()
          }
        </div>
      </div>
      {/* <div className="fixed bottom-0 mb-4 w-full bg-neutral-white h-[10%] flex flex-col justify-center px-4">
        <Button 
          text="Next" 
          type="primary" 
          className="text-neutral-white"
          onClick={() => console.log('')}

        /> 
      </div> */}
    </div>
  );
};

export default Form;
