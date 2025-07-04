import React from "react";

export const Form = React.forwardRef<
  HTMLFormElement,
  React.ComponentProps<"form">
>(({ children, ...props }, ref) => {
  return (
    <form
      {...props}
      ref={ref}
      onSubmit={(e) => {
        console.log("this is e ");
        e.preventDefault();
        e.stopPropagation();
        props?.onSubmit?.(e);
      }}
      className="space-y-4"
    >
      {children}
    </form>
  );
});
