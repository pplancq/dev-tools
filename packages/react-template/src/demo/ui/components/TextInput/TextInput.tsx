import { Input } from '@Demo/ui/components/Input/Input';
import type { InputHTMLAttributes } from 'react';
import { type FieldError, useFormContext } from 'react-hook-form';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const TextInput = ({ name, label, ...rest }: TextInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Input
      label={label}
      {...register(name)}
      {...rest}
      hasError={!!errors[name]}
      helperText={(errors[name] as FieldError)?.message}
    />
  );
};
