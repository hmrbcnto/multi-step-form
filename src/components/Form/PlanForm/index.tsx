import React, { useState } from 'react';
import { useRegistrationForm } from '../../../contexts/FormContext';
import Switch from 'react-switch';
import SelectBox from '../../SelectBox';
import { Plans } from '../../../constants/Plans';
import Button from '../../Button';
import { Plan } from '../../../contexts/FormContext.types';

const PlanForm: React.FC = () => {
  const { registration, updateRegistrationForm } = useRegistrationForm();
  const [plan, setPlan] = useState<Plan | undefined>(registration?.plan);

  const handleSwitch = () => {
    const newValue = registration?.payment_option === 'yearly' ? 'monthly' : 'yearly';

    updateRegistrationForm ? updateRegistrationForm({
      payment_option: newValue
    }) : <></>;
  };

  const generateSwitchLabelClasses = (label: string) => {
    return `font-bold text-primary-marine_blue ${registration?.payment_option !== label ? 'text-neutral-light_gray' : ''}`
  };

  const goBack = () => {
    updateRegistrationForm?.({ currentStep: 'information' })
  };

  const next = () => {
    updateRegistrationForm?.({
      currentStep: 'add-ons',
      plan
    });
  }

  return (
    <>
      <div className="flex flex-col justify-start self-start gap-1">
        <p className="text-primary-marine_blue text-3xl font-bold"> Select your plan </p>
        <p className="text-neutral-cool_gray"> You have the option of yearly or monthly billing </p>
      </div>
      <div className="flex gap-2 w-full">
        <div className="flex flex-col desktop:flex-row desktop:gap-6 gap-2 w-full">
          { Plans.map(planObject => (
            <SelectBox
              icon={planObject.logo}
              text={planObject.text}
              subText={registration?.payment_option === 'monthly' ? planObject.monthSubText : planObject.yearSubText}
              onClick={() => setPlan(planObject?.value)}
              isSelected={planObject?.value === plan && !!plan}
            />
          ))}
        </div>
      </div>
      <div className="flex gap-4 justify-center w-full rounded-xl bg-neutral-magnolia py-2">
        <span className={generateSwitchLabelClasses('monthly')}> Monthly </span>
        <Switch 
          onChange={handleSwitch}
          checked={registration?.payment_option === 'yearly'}
          offColor="#02295a"
          onColor="#02295a"
          checkedIcon={false}
          uncheckedIcon={false}
        />
        <span className={generateSwitchLabelClasses('yearly')}> Yearly </span>
      </div>
      <div className="flex w-full justify-between self-end">
        <Button 
          text="Go back" 
          type="primary" 
          className="text-neutral-white"
          onClick={goBack}
        />
        <Button 
          text="Next" 
          type="primary" 
          className="text-neutral-white"
          onClick={next}
          isDisabled={!plan}
        />
      </div>
    </>
  )
};

export default PlanForm;
