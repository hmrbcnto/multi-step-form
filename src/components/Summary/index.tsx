import React from 'react';
import { AddOns } from '../../constants/AddOns';
import { Plans, PlanType } from '../../constants/Plans';
import { SummaryProps } from './Summary.types';

const Summary: React.FC<SummaryProps> = ({
  addOns,
  totalCost,
  plan,
  paymentOption,
  clickChange
}) => {
  const capitalize = (value: string | undefined) => value ? value[0].toUpperCase() + value.substring(1) : '';
  const matchingPlan = Plans.filter((planObject: PlanType) => plan === planObject?.value)[0];
  const paymentPeriod = capitalize(paymentOption.substring(0, paymentOption.length-2))
  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col bg-neutral-alabaster p-2 rounded-xl">
        <div className="flex flex-row justify-between items-center align-center border-b border-solid border-neutral-cool_gray pb-8">
          <div className="flex flex-col">
            <p className="desktop:text-2xl text-md text-primary-marine_blue font-extrabold">{capitalize(plan)} ({capitalize(paymentOption)}) </p>
            <p 
              className="text-light text-neutral-cool_gray underline"
              onClick={clickChange}
            >Change</p>
          </div>
          <p className="text-sm desktop:text-xl font-extrabold text-primary-marine_blue">${matchingPlan[`${paymentOption}Value`]}/{paymentPeriod}</p>
        </div>
        <br />
        <div className="flex flex-col">
          {addOns.map((addOnString: string) => {
            // Get corresponding data from addon constants
            const addOnObject = AddOns.filter((addOn) => addOn.value === addOnString)[0];
            let cost;
            if (paymentOption === 'yearly') {
              cost = addOnObject.yearlyCost;
            } else {
              cost = addOnObject.monthlyCost;
            }
            return (
              <div className="flex justify-between">
                <span className="font-light text-sm text-neutral-cool_gray">{addOnObject.text}</span>
                <span className="text-primary-marine_blue text-sm desktop:text-base">+${cost}/{paymentPeriod}</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="flex justify-between">
        <span className="text-sm desktop:text-base font-light text-neutral-cool_gray">Total (per {paymentPeriod})</span>
        <span className="text-sm desktop:text-xl text-primary-purplish_blue font-extrabold"> ${totalCost}/{paymentPeriod} </span>
      </div>
    </div>
  )
}

export default Summary;