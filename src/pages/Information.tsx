import React, { useState } from 'react';
import Input from '../components/Input';

const Information: React.FC = () => {
  const [value, setValue] = useState<string>('Hello!');
  return (
    <Input 
      value={value}
      onChange={setValue}
      title={value}
      placeholder="hehehehe"
    />
  )
};

export default Information;