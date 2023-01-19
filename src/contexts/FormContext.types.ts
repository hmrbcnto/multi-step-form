export interface RegistrationFormContext {
  registration: RegistrationForm;
  updateRegistrationForm?: (registration: RegistrationForm) => void;
}
export interface RegistrationForm {
  name?: string;
  email?: string;
  phone_number?: string;
  payment_option?: 'monthly' | 'yearly';
  plan?: 'arcade' | 'advanced' | 'pro';
  addOns?: Addon[];
  currentStep?: string;
};

export type Plan = 'arcade' | 'advanced' | 'pro';
type Addon = 'online_service' | 'larger_storage' | 'customizable_profile';