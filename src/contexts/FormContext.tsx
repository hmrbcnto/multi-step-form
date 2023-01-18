import React, { useState } from 'react';
import { RegistrationForm, RegistrationFormContext } from './FormContext.types';

export const FormContext = React.createContext<RegistrationFormContext | null>(null);

const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [registration, setRegistration] = useState<RegistrationForm>({});
  
  const updateRegistrationForm = (registration: RegistrationForm) => {
    setRegistration({
      ...registration
    })
  };

  return (
    <FormContext.Provider value={{ registration, updateRegistrationForm }}>
      {children}
    </FormContext.Provider>
  )
};

export default FormProvider;
