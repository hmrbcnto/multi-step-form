import React from "react";

export interface ButtonProps {
  type?: 'primary' | 'ghost';
  isDisabled?: boolean;
  text: React.ReactNode | React.ReactNode[];
  className?: string;
  onClick: () => void;
};
