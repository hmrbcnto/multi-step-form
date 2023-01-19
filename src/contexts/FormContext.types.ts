export interface RegistrationFormContext {
  registration: RegistrationForm;
  updateRegistrationForm?: (registration: UpdateRegistrationFormType) => void;
}
export interface RegistrationForm {
  name?: string;
  email?: string;
  phone_number?: string;
  payment_option?: 'monthly' | 'yearly';
  plan?: 'arcade' | 'advanced' | 'pro';
  addOns: AddonString[];
  currentStep?: string;
};

export interface UpdateRegistrationFormType {
  name?: string;
  email?: string;
  phone_number?: string;
  payment_option?: 'monthly' | 'yearly';
  plan?: 'arcade' | 'advanced' | 'pro';
  addOns?: AddonString[];
  currentStep?: string;
}

export type Plan = 'arcade' | 'advanced' | 'pro';
export type AddonString = 'online_service' | 'larger_storage' | 'customizable_profile';