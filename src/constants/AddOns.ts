import { AddonString } from "../contexts/FormContext.types";

export interface AddOn {
  text: string;
  subText: string;
  value: AddonString;
  monthlyCost: number;
  yearlyCost: number;
};

export const AddOns: AddOn[] = [
  {
    text: 'Online service',
    subText: 'Access to multiplayer games',
    value: 'online_service',
    monthlyCost: 1,
    yearlyCost: 10
  },
  {
    text: 'Larger storage',
    subText: 'Extra 1TB of cloud save',
    value: 'larger_storage',
    monthlyCost: 2,
    yearlyCost: 20
  },
  {
    text: 'Customizable profile',
    subText: 'Custom theme on your profile',
    value: 'customizable_profile',
    monthlyCost: 2,
    yearlyCost: 20
  }
];
