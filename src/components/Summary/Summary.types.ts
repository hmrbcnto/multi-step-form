import { AddonString, Plan } from "../../contexts/FormContext.types"
export interface SummaryProps {
  addOns: AddonString[];
  totalCost: number;
  plan: Plan | undefined;
  paymentOption: 'yearly' | 'monthly';
  clickChange: () => void;
};
