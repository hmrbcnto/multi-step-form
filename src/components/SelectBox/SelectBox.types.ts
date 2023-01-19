import React from 'react';

export interface SelectBoxProps {
  icon: string;
  text: React.ReactNode | React.ReactNode[];
  subText?: React.ReactNode | React.ReactNode[];
  isSelected?: boolean;
  onClick?: () => void;
};
