export interface StepsProps {
  steps: StepsItem[];
  activeStep?: string | number;
}

export interface StepsItem {
  isActive?: boolean;
  stepName: string;
  stepNumber: number;
}