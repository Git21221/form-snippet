import * as React from "react";
import { FormProvider, useForm } from "react-hook-form";

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
