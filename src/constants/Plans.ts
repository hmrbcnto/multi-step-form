import arcadeLogo from '../assets/images/icon-arcade.svg';
import advancedLogo from '../assets/images/icon-advanced.svg';
import proLogo from '../assets/images/icon-pro.svg';
import React from 'react';
import { Plan } from '../contexts/FormContext.types';

interface PlanType {
  text: string;
  yearSubText: React.ReactNode | React.ReactNode[];
  monthSubText: React.ReactNode | React.ReactNode[];
  logo: string;
  value: Plan;
};

export const PlanConstants: PlanType[] = [
  {
    text: 'Arcade',
    monthSubText: '$9/month',
    yearSubText: '$90/year',
    logo: arcadeLogo,
    value: 'arcade'
  },
  {
    text: 'Advanced',
    monthSubText: '$12/month',
    yearSubText: '$120/year',
    logo: advancedLogo,
    value: 'advanced'
  },
  {
    text: 'Pro',
    monthSubText: '$15/month',
    yearSubText: '$150/year',
    logo: proLogo,
    value: 'pro'
  },
];
