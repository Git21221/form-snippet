import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";

/**
 * @typedef {Object} FormWrapperProps
 * @property {React.ReactNode} children - The children of the FormWrapper component
 * @property {(formData: any) => void} onSubmit - The function to call when the form is submitted
 * @returns {JSX.Element} - The JSX element of the FormWrapper component
 */

type FormWrapperProps = {
  children: React.ReactNode;
  onSubmit: (formData: any) => void;
};

const FormWrapper = ({ children, onSubmit }: FormWrapperProps) => {
  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const handleSubmit = methods.handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormProvider>
  );
};

export { FormWrapper };
