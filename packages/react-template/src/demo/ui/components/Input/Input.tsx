import { forwardRef, InputHTMLAttributes, useId } from 'react';
import classes from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hasError?: boolean;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, hasError, helperText, ...rest }, ref) => {
  const id = useId();
  return (
    <>
      <div className={classes.inputContainerStyle}>
        <label htmlFor={id}>{label} </label>
        <input id={id} ref={ref} {...rest} className={hasError ? classes.hasInputError : classes.inputStyle} />
      </div>
      {hasError ? (
        <p role="alert" className={classes.errorsStyle}>
          {helperText}
        </p>
      ) : null}
    </>
  );
});

Input.displayName = 'Input';
