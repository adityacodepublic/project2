import { AutoFormFieldProps } from "@autoform/react";
import React from "react";
import { useController } from "react-hook-form";
import AddColors from "./color-adder";
import { Badge } from "../../ui/badge";

export const ColorAddField: React.FC<AutoFormFieldProps> = ({
  inputProps,
  id,
}) => {
  const { key, onChange, onBlur, ref, ...props } = inputProps;
  const { field: formField } = useController({
    name: id,
  });

  return (
    <div className="space-y-2">
      <AddColors value={formField.value} onValueChange={formField.onChange} />
      {Array.isArray(formField.value) && !!formField.value.length && (
        <div className="space-x-2">
          {formField.value.map((item, index) => (
            <Badge variant={"secondary"} key={index}>
              {item}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};
