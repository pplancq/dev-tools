import { ProfileForm } from '@Front/forms/ProfileForm';
import { ProfileType } from '@Front/types/profileTypes';
import { useState } from 'react';

import classes from './ReactHookFormDemo.module.css';

export const ReactHookFormDemo = () => {
  const [profileData, setProfileData] = useState<ProfileType>();

  const onSubmit = (data: ProfileType) => {
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
            <legend>Formulaire</legend>
            <ProfileForm onSubmit={onSubmit} resetForm={resetForm} />
          </fieldset>

          {profileData && (
            <fieldset>
              <legend>Résultat</legend>
              <p>E-mail: {profileData.mail} </p>
              <p>First-name: {profileData.firstName} </p>
              <p>Last-name: {profileData.lastName} </p>
            </fieldset>
          )}
        </div>
      </fieldset>
    </div>
  );
};
