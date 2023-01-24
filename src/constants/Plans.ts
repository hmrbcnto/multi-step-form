import arcadeLogo from '../assets/images/icon-arcade.svg';
import advancedLogo from '../assets/images/icon-advanced.svg';
import proLogo from '../assets/images/icon-pro.svg';
import React from 'react';
import { Plan } from '../contexts/FormContext.types';

export interface PlanType {
  text: string;
  yearSubText: React.ReactNode | React.ReactNode[];
  monthSubText: React.ReactNode | React.ReactNode[];
  monthlyValue: number;
  yearlyValue: number;
  logo: string;
  value: Plan;
};

export const Plans: PlanType[] = [
  {
    text: 'Arcade',
    monthSubText: '$9/month',
    yearSubText: '$90/year',
    monthlyValue: 9,
    yearlyValue: 90,
    logo: arcadeLogo,
    value: 'arcade'
  },
  {
    text: 'Advanced',
    monthSubText: '$12/month',
    yearSubText: '$120/year',
    monthlyValue: 12,
    yearlyValue: 120,
    logo: advancedLogo,
    value: 'advanced'
  },
  {
    text: 'Pro',
    monthSubText: '$15/month',
    yearSubText: '$150/year',
    monthlyValue: 15,
    yearlyValue: 150,
    logo: proLogo,
    value: 'pro'
  },
];
