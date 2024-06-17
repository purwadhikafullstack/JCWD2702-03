import React from 'react';
import { CheckboxProps } from './types';

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, label }) => {
  return (
    <div className="flex items-center mt-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-blue-600 transition duration-150 ease-in-out mr-2"
      />
      <label className="text-gray-700">{label}</label>
    </div>
  );
};

export default Checkbox;