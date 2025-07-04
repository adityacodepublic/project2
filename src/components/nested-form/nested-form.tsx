import { AutoForm } from "@/components/ui/autoform/AutoForm";
import { ZodProvider, fieldConfig } from "@autoform/zod";
import { ReactNode } from "react";
import { toast } from "sonner";
import * as z from "zod";
import { ColorAddField } from "./fields/colorAddField";

const mySchema = z.object({
  username: z.string(),
  password: z.string().superRefine(
    fieldConfig({
      inputProps: {
        type: "password",
      },
      description: "Always use a secure password",
    })
  ),
  colors: z
    .string()
    .array()
    .min(1, "minimum one color required !")
    .default([""])
    .describe("Tell us your favourite colors!")
    .superRefine(fieldConfig({ fieldType: "colorAdder" })),
});
const schemaProvider = new ZodProvider(mySchema);

export function NestedForm({ children }: { children?: ReactNode }) {
  return (
    <AutoForm
      schema={schemaProvider}
      formComponents={{ colorAdder: ColorAddField }}
      onSubmit={(data, form) => {
        toast.success(JSON.stringify(data));
        form.reset({ colors: [] });
      }}
      withSubmit
    >
      {children}
    </AutoForm>
  );
}
