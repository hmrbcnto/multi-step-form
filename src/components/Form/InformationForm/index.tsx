import React, { useState } from 'react';
import Button from '../../Button';
import Input from '../../Input';

const InformationForm: React.FC = () => {
  const [value, setValue] = useState<string>('');
  return (
    <div className="flex flex-col py-8 px-8 gap-6">
      <div className="flex flex-col justify-start gap-2">
        <p className="text-primary-marine_blue text-3xl font-bold"> Personal info </p>
        <p className="text-neutral-cool_gray"> Please provide your name, email address, and phone number. </p>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          id="name"
          value={value}
          onChange={setValue}
          title="Name"
          placeholder="e.g. Stephen King"
        />
        <Input
          id="email"
          value={value}
          onChange={setValue}
          title="Email Address"
          placeholder="e.g. stephenking@lorem.com"
        />
        <Input
          id="phone_number"
          value={value}
          onChange={setValue}
          title="Phone Number"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
      <Button text="Go back" type="primary" className="self-end text-neutral-white"/>
    </div>
  )
};

export default InformationForm;
