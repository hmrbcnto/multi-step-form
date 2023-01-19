import React from 'react';
import Form from '../components/Form';
import { FormProvider } from '../contexts/FormContext';

const Plan: React.FC = () => {
  return (
    <FormProvider>
      <div className="flex flex-col items-center align-center justify-center w-full h-screen bg-neutral-light_gray"> 
        <Form />
      </div>
    </FormProvider>
  )
};

export default Plan;
