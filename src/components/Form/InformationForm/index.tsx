import React, { useState, useReducer } from 'react';
import Button from '../../Button';
import Input from '../../Input';
import { useRegistrationForm }  from '../../../contexts/FormContext';
import { twMerge } from 'tailwind-merge';

type InformationData = {
  name?: string;
  email?: string;
  phone_number?: string;
}

const InformationForm: React.FC = () => {
  
  const { updateRegistrationForm, registration } = useRegistrationForm();

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

  const handleSubmit = () => updateRegistrationForm?.({ ...information, currentStep: 'plan' })

  return (
    <>
      <div className="flex flex-col justify-start gap-2">
        <p className="text-primary-marine_blue text-3xl font-bold"> Personal info </p>
        <p className="text-neutral-cool_gray"> Please provide your name, email address, and phone number. </p>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          id="name"
          value={information.name}
          onChange={value => modifyInformation('name', value)}
          title="Name"
          placeholder="e.g. Stephen King"
        />
        <Input
          id="email"
          value={information.email}
          onChange={value => modifyInformation('email', value)}
          title="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />
        <Input
          id="phone_number"
          value={information.phone_number}
          onChange={value => modifyInformation('phone_number', value)}
          title="Phone Number"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
      {/* <div className="flex justify-end hidden desktop:relative">
        <Button 
          text="Next" 
          type="primary" 
          className="self-end text-neutral-white"
          onClick={handleSubmit}
        />
      </div> */}
      {/* <div className="h-16 block bottom-0  w-full bg-neutral-white">
        <Button 
          text="Next" 
          type="primary" 
          className="self-end text-neutral-white"
          onClick={handleSubmit}
        /> 
      </div> */}
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
