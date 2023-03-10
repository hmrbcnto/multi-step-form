import React, { useState, useReducer } from 'react';
import Button from '../../Button';
import Input from '../../Input';
import { useRegistrationForm }  from '../../../contexts/FormContext';

type InformationData = {
  name?: string;
  email?: string;
  phone_number?: string;
}

const InformationForm: React.FC = () => {
  
  const { updateRegistrationForm, registration } = useRegistrationForm();
  const [isError, setIsError] = useState<boolean>(false);

  const [information, setInformation] = useState<InformationData>({
    name: registration?.name,
    email: registration?.email,
    phone_number: registration?.phone_number
  });

  const modifyInformation = (key: string, value: string | number) => {
    setInformation({
      ...information,
      [key]: value
    });
  };

  const handleSubmit = () => {
    if (!information?.name || !information?.email || !information.phone_number) {
      return setIsError(true);
    }
    updateRegistrationForm?.({ ...information, currentStep: 'plan' })
  }

  return (
    <>
      <div className="flex flex-col justify-start gap-2">
        <p className="text-primary-marine_blue text-3xl font-bold"> Personal info </p>
        <p className="text-neutral-cool_gray"> Please provide your name, email address, and phone number. </p>
      </div>
      <div className="flex flex-col gap-2">
        <Input
          id="name"
          value={information.name}
          onChange={value => modifyInformation('name', value)}
          title="Name"
          placeholder="e.g. Stephen King"
          status={isError && !information.name ? 'error' : undefined}
        />
        <Input
          id="email"
          value={information.email}
          onChange={value => modifyInformation('email', value)}
          title="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          status={isError && !information.email ? 'error' : undefined}
        />
        <Input
          id="phone_number"
          value={information.phone_number}
          onChange={value => modifyInformation('phone_number', value)}
          title="Phone Number"
          placeholder="e.g. +1 234 567 890"
          status={isError && !information.phone_number ? 'error' : undefined}
        />
      </div>
      <Button 
        text="Next" 
        type="primary" 
        className="self-end text-neutral-white"
        onClick={handleSubmit}
      />
    </>
  )
};

export default InformationForm;
