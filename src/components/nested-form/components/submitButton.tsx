import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { UseFormReturn, useFormContext } from "react-hook-form";

export interface SubmitButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  onFormSubmit?: (
    values: any,
    form: UseFormReturn<any, any, any>
  ) => void | Promise<void>;
}

export const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ onFormSubmit, onClick, ...props }, ref) => {
    const methods = useFormContext();
    const onSubmit = (data: any) => {
      onFormSubmit?.(data, methods);
    };
    return (
      <Button
        onClick={(e) => {
          methods.handleSubmit(onSubmit);
          onClick?.(e);
        }}
        ref={ref}
        {...props}
      />
    );
  }
);
