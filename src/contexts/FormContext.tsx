import React, { useState } from 'react';
import { RegistrationForm, RegistrationFormContext } from './FormContext.types';

export const FormContext = React.createContext<RegistrationFormContext>({
  registration: {
    currentStep: 'plan',
    payment_option: 'yearly'
  }
});

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [registration, setRegistration] = useState<RegistrationForm>({});
  
  const updateRegistrationForm = (updatedRegistration: RegistrationForm) => {
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
