import React from 'react';
import { SummaryProps } from './Summary.types';

const Summary: React.FC<SummaryProps> = ({
  addOns,
  totalCost,
  plan,
  paymentOption,
  clickChange
}) => {
  const capitalize = (value: string | undefined) => value ? value[0].toUpperCase() + value.substring(1) : '';

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col bg-neutral-alabaster p-6 rounded-xl">
        <div className="flex flex-row justify-between items-center align-center border-b border-solid border-neutral-cool_gray pb-8">
          <div className="flex flex-col">
            <p className="text-2xl text-primary-marine_blue font-extrabold">{capitalize(plan)} ({capitalize(paymentOption)}) </p>
            <p 
              className="text-light text-neutral-cool_gray underline"
              onClick={clickChange}
            >Change</p>
          </div>
          <p className="text-xl font-extrabold text-primary-marine_blue">$9/Month</p>
        </div>
        <br />
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span className="font-light text-neutral-cool_gray">Online service</span>
            <span className="text-primary-marine_blue">+$1/Month</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-6">
        <span className="font-light text-neutral-cool_gray">Total (per month)</span>
        <span className="text-2xl text-primary-purplish_blue font-extrabold"> +${totalCost}/month </span>
      </div>
    </div>
  )
}

export default Summary;