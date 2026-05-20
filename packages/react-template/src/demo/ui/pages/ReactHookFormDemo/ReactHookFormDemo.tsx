import type { ProfileFormValues } from '@Demo/application/dtos/ProfileFormValues';
import { ProfileForm } from '@Demo/ui/forms/ProfileForm/ProfileForm';
import { useState } from 'react';

import classes from './ReactHookFormDemo.module.scss';

export const ReactHookFormDemo = () => {
  const [profileData, setProfileData] = useState<ProfileFormValues>();

  const onSubmit = (data: ProfileFormValues) => {
    setProfileData({ ...data });
  };

  const resetForm = () => {
    setProfileData(undefined);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>React Hook Form</h1>
      <hr className={classes.lineStyle} color="#00008f" />

      <fieldset className={classes.fieldsetStyle}>
        <legend className={classes.subTitle}>React Hook Form Example</legend>
        <p className={classes.paragraph}>
          React Hook Form is a React library that simplifies form management in a React application using hooks. It
          provides a lightweight and efficient approach for handling form state, data validation, and handling
          form-related events.
        </p>
        <div className={classes.profileSectionStyle}>
          <fieldset>
            <legend>Form</legend>
            <ProfileForm onSubmit={onSubmit} resetForm={resetForm} />
          </fieldset>

          {profileData ? (
            <fieldset>
              <legend>Result</legend>
              <p>E-mail: {profileData.mail} </p>
              <p>First-name: {profileData.firstName} </p>
              <p>Last-name: {profileData.lastName} </p>
            </fieldset>
          ) : null}
        </div>
      </fieldset>
    </div>
  );
};
