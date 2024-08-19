import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
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
