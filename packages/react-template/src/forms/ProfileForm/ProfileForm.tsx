import { TextInput } from '@Front/components/TextInput';
import { ProfileType } from '@Front/types/profileTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import classes from './ProfileForm.module.scss';

type ProfileFormProps = {
  onSubmit: SubmitHandler<ProfileType>;
  resetForm: () => void;
};

const schema = yup.object().shape({
  mail: yup.string().email('Check the mail pattern').required('This field is required'),
  firstName: yup.string().required('This field is required'),
  lastName: yup.string().required('This field is required'),
});

export const ProfileForm = ({ onSubmit, resetForm }: ProfileFormProps) => {
  const methods = useForm<ProfileType>({
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <p>The form is being submited {methods.formState.submitCount} times</p>
        <TextInput label="E-mail" type="email" name="mail" placeholder="Exemple@gmail.com" />

        <TextInput label="First Name" name="firstName" placeholder="First Name" />

        <TextInput label="Last Name" name="lastName" placeholder="Last Name" />

        <div className={classes.buttonsStyle}>
          <input type="submit" className={classes.inputStyle} />
          {methods.formState.isSubmitted && (
            <input
              type="button"
              className={classes.inputStyle}
              value="Reset"
              onClick={() => {
                methods.reset();
                resetForm();
              }}
            />
          )}
        </div>
      </form>
    </FormProvider>
  );
};
