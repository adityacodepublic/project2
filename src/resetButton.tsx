import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import { useFormContext } from "react-hook-form";

export interface ResetButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  resetVal: Record<string, any>;
}

export const ResetButton = forwardRef<HTMLButtonElement, ResetButtonProps>(
  ({ resetVal, onClick, ...props }) => {
    const { reset } = useFormContext();
    return (
      <Button
        onClick={(e) => {
          reset(resetVal);
          onClick?.(e);
        }}
        {...props}
      />
    );
  }
);
