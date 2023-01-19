import React from "react";

export interface InputProps {
  id?: string;
  value?: string | number;
  onChange: React.Dispatch<React.SetStateAction<any>>;
  title?: React.ReactNode[] | React.ReactNode;
  status?: 'error' | 'success';
  mask?: string;
  placeholder?: string;
}