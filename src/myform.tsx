import { AutoForm } from "@/components/ui/autoform/AutoForm";
import { ZodProvider, fieldConfig } from "@autoform/zod";
import { ReactNode } from "react";
import { toast } from "sonner";
import * as z from "zod";

const mySchema = z.object({
  username: z.string(),
  type: z
    .enum(["create", "read", "update", "delete"])
    .default("" as any)
    .superRefine(
      fieldConfig({
        label: "Type",
        inputProps: {
          placeholder: "Select type",
        },
      })
    ),
});
const schemaProvider = new ZodProvider(mySchema);

export function MyForm({ children }: { children: ReactNode }) {
  return (
    <AutoForm
      schema={schemaProvider}
      onSubmit={(data, form) => {
        toast.success(<pre>{JSON.stringify(data)}</pre>);
        form.reset({ username: "", type: "" as any });
      }}
    >
      {children}
    </AutoForm>
  );
}
