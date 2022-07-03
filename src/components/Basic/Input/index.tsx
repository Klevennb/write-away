import { FC } from 'react';
import { StyledTextField } from './styles';

type TextInputProps = {
  className?: string;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  variant?: 'standard' | 'filled' | 'outlined' | undefined;
  defaultValue?: string;
  name?: string;
  error?: boolean;
  onChange: any;
};

export const TextInput: FC<TextInputProps> = (props) => {
  const {
    disabled,
    label,
    required,
    defaultValue,
    className,
    variant,
    error,
  } = props;

  return (
    <StyledTextField
      required={required}
      id={label}
      label={label}
      defaultValue={defaultValue}
      disabled={disabled}
      className={className}
      variant={variant}
      size="small"
      error={error}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

TextInput.defaultProps = {
  className: '',
  disabled: false,
  required: false,
  label: '',
  variant: 'outlined',
  defaultValue: '',
  name: undefined,
  error: undefined,
};