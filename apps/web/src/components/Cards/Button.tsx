import { ButtonProps } from './types';
const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  disabled,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} px-3 py-1 rounded transition-colors duration-300`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;