import React, { useState } from 'react';
import { AddonString, RegistrationForm, RegistrationFormContext, UpdateRegistrationFormType } from './FormContext.types';

export const FormContext = React.createContext<RegistrationFormContext>({
  registration: {
    currentStep: 'information',
    payment_option: 'monthly',
    addOns: []
  }
});

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [registration, setRegistration] = useState<RegistrationForm>({ addOns: [], currentStep: 'information', payment_option: 'monthly' });
  
  const updateRegistrationForm = (updatedRegistration: UpdateRegistrationFormType) => {
    setRegistration({
      ...registration,
      ...updatedRegistration
    });
  };

  return (
    <FormContext.Provider value={{ registration, updateRegistrationForm }}>
      {children}
    </FormContext.Provider>
  )
};

export const useRegistrationForm = () => React.useContext(FormContext);
