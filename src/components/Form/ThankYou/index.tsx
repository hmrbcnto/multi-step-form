import React from 'react';
import thankYou from '../../../assets/images/icon-thank-you.svg';

const ThankYou: React.FC = () => {
  return (
    <div className="flex flex-col p-8 gap-6 items-center align-center justify-center gap-4 h-full">
      <img src={thankYou} alt="thank you icon" />
      <p className="text-3xl font-extrabold text-primary-marine_blue"> Thank you!</p>
      <p className="text-center font-light text-neutral-cool_gray"> Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, feel free to email us at support@loremgaming.com</p>
    </div>
  )
}

export default ThankYou;
