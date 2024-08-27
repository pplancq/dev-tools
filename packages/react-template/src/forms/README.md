# 📁 forms

The "forms" folder is designed to organize and manage all the necessary forms in our application. Whether it's for managing vehicle-related risks, contact forms, or any other type of form, this folder is intended to centralize the logic and presentation of forms.

## 📑 Table of Contents

- [Why Use a "forms" Folder](#folder-organization)
- [Typical Structure of a "forms" Folder](#structure)
- [Usage](#usage)
- [Using React Hook Form](#react-hook-form)
- [Best Practice](#best-practice)

## <span id="folder-organization">Why Use a "forms" Folder?</span>

1. **Organization** : By grouping all form components in a dedicated folder, we maintain a clean and clear project structure. This facilitates the search and management of forms.

2. **Reusability** : The form components we develop in this folder can be reused across different parts of the application, promoting code modularity.

3. **Code Clarity** : By separating form components from the application logic, we make our code more readable and easier to maintain.

## <span id="structure">Typical Structure of a "forms" Folder</span>

The structure of a "forms" folder can vary based on our project's needs, but here is a typical structure we might adopt:

```
📁 forms
├── 📁VehicleRiskForm
│   ├── 📄 index.ts
│   ├── 📄 VehicleRiskForm.tsx
│   ├── 📄 VehicleRiskForm.module.css
├── 📁ContactForm
│   ├── 📄 index.ts
│   ├── 📄 ContactForm.tsx
│   ├── 📄 ContactForm.module.css
```

In this structure, each form, such as "VehicleRiskForm" or "ContactForm," has its own sub-folder containing associated TypeScript and CSS files. This helps maintain a clear organization of our code.

## <span id="usage">🧑🏻‍💻Usage Example</span>

Suppose we have a "VehicleRiskForm" form component in the "forms/VehicleRiskForm" folder. We can import and use it in our React components like this:

```javascript
import { VehicleRiskForm } from '@Front/forms/VehicleRiskForm';

export const App = () => {
  return (
    <div>
      <VehicleRiskForm />
      {/* ... other elements of the application */}
    </div>
  );
};
```

## <span id="react-hook-form">💡 Using React Hook Form</span>

This project utilizes [React Hook Form](https://react-hook-form.com/) for handling forms. React Hook Form is a powerful library for managing forms in React applications with a simple and intuitive API.

### React Hook Form Overview

[React Hook Form](https://react-hook-form.com/) is a library for managing forms in React applications. It offers a declarative approach to handling form state and validation, making it easy to create complex forms with minimal boilerplate.

#### Features:

- **Declarative Approach:** Define your forms with a declarative syntax, making it easy to understand and maintain.

- **Minimal Re-renders:** React Hook Form is designed to minimize re-renders for optimal performance.

- **Form Validation:** Easily implement form validation with built-in validation rules or custom validation functions.

- **Context API Integration:** Leverage React Hook Form's context API for managing form state across components.

### Implementation using React Hook Form Context

In this project, we've taken advantage of React Hook Form's context API to manage the state of our forms across different components. This allows us to access and update form data without prop drilling, making the codebase cleaner and more maintainable.

#### Example:

```jsx
import React from 'react';
import { useForm } from 'react-hook-form';

// Form component using React Hook Form
const MyForm = () => {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = data => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input {...register('name', { required: true })} />
      </label>

      {/* Add more form fields as needed */}

      <button type="submit" disabled={formState.isSubmitting}>
        Submit
      </button>
    </form>
  );
};
```

In the above example, we use the useForm hook to initialize the form and get the necessary methods (register, handleSubmit, and formState). The onSubmit function is called when the form is submitted, and you can access the form data from the data parameter.

**_By using React Hook Form in this way, we've streamlined the form management process and created a more maintainable and efficient solution for handling forms in our project._**

## <span id="best-practice">🎖️ Best Practice</span>

When working with `React-hook-form`, consider the following best practices to enhance maintainability and organization:

#### - Use FormProvider

Always use the `FormProvider` provided by `react-hook-form` to manage the form state.

This ensures a centralized state management approach and simplifies form-related operations.

#### - Separate Yup Validation Rules

If validation rules become extensive, consider separating them into a dedicated file for better organization. This enhances readability and simplifies updates to validation logic.

#### - Separate useForm Logic

Separate the logic related to `useForm` into a custom hook file, especially if the form logic is complex or if it is shared across multiple components.

#### - Separate onSubmit Function

If the `onSubmit` function logic is substantial, consider separating it into a dedicated file. This promotes a clean separation of concerns and makes the codebase more modular.

#### - Separate Submit Button

If needed, separate the submit button into its own file to facilitate easy customization or relocation from the main form component.

---

**_By adhering to these best practices, you create a structured and modular approach to form management, ensuring clarity and maintainability in your codebase._**
