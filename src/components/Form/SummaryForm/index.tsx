import React from 'react';
import { useRegistrationForm } from '../../../contexts/FormContext';
import Summary from '../../Summary';
import { AddOns } from '../../../constants/AddOns';
import Button from '../../Button';

const SummaryForm: React.FC = () => {
  const { updateRegistrationForm, registration } = useRegistrationForm();

  const calculateTotal = () => {
    const paymentOption = registration?.payment_option;
    let totalCost = 0;
    registration.addOns.map((addOn: string) => {
      const addOnObject = AddOns.filter((addOnSearch) => addOnSearch.value === addOn)[0];
      totalCost = totalCost + addOnObject[`${paymentOption}Cost`];
    });

    return totalCost;
  }

  const goBack = () => {
    updateRegistrationForm?.({
      currentStep: 'add-ons'
    });
  };

  const next = () => {
    updateRegistrationForm?.({
      currentStep: 'thank-you',
      confirmed: true
    });
  };

  const change = () => {
    updateRegistrationForm?.({
      currentStep: 'plan'
    });
  };

  return (
    <div className="flex flex-col p-8 gap-6">
      <div className="flex flex-col justify-start gap-2">
        <p className="text-primary-marine_blue text-3xl font-bold"> Finishing up </p>
        <p className="text-neutral-cool_gray"> Double check everything looks OK before confirming. </p>
      </div>
      <Summary 
        addOns={registration?.addOns}
        totalCost={calculateTotal()}
        plan={registration?.plan}
        paymentOption={registration?.payment_option}
        clickChange={change}
      />
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
        />
      </div>
    </div>
  )
};

export default SummaryForm;
