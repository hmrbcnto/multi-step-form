import React, { useState } from 'react';
import { AddOn, AddOns } from '../../../constants/AddOns';
import { useRegistrationForm } from '../../../contexts/FormContext';
import { AddonString } from '../../../contexts/FormContext.types';
import Button from '../../Button';
import Checkbox from '../../Checkbox';

const AddonForm: React.FC = () => {
  const { updateRegistrationForm, registration } = useRegistrationForm();
  const [addOns, setAddons] = useState<AddonString[]>(registration?.addOns)

  const onChange = (value: AddonString) => {
    // Check if addons already contains value. If it does, remove. If it doesn't, add value.
    if (addOns.includes(value)) {
      const newArray = addOns.filter(addon => addon !== value);
      return setAddons(newArray);
    };
    setAddons([...addOns, value])
  };

  const goBack = () => {
    updateRegistrationForm?.({
      currentStep: 'plan'
    });
  };

  const next = () => {
    updateRegistrationForm?.({
      addOns,
      currentStep: 'summary'
    });
  };

  return (
    <>
      <div className="flex flex-col justify-start gap-2">
        <p className="text-primary-marine_blue text-3xl font-bold"> Pick add-ons </p>
        <p className="text-neutral-cool_gray"> Add-ons help enhance your gaming experience </p>
      </div>
      <div className="flex flex-col items-start align-start gap-2">
        {AddOns.map((addon: AddOn) => (
          <Checkbox
            text={addon.text}
            subText={addon.subText}
            value={addon.value}
            cost={registration?.payment_option === 'monthly' ? `+$${addon.monthlyCost}/month` : `$${addon.yearlyCost}/year`}
            onChange={() => onChange(addon.value)}
            isChecked={addOns.includes(addon.value)}
          />
        ))}
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
        />
      </div>
    </>
  )
};

export default AddonForm;
