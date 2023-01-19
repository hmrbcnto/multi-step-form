import { AddonString } from "../contexts/FormContext.types";

export interface AddOn {
  text: string;
  subText: string;
  value: AddonString;
  monthCost: number;
  yearCost: number;
};

export const AddOns: AddOn[] = [
  {
    text: 'Online service',
    subText: 'Access to multiplayer games',
    value: 'online_service',
    monthCost: 1,
    yearCost: 10
  },
  {
    text: 'Larger storage',
    subText: 'Extra 1TB of cloud save',
    value: 'larger_storage',
    monthCost: 2,
    yearCost: 20
  },
  {
    text: 'Customizable profile',
    subText: 'Custom theme on your profile',
    value: 'customizable_profile',
    monthCost: 2,
    yearCost: 20
  }
];
