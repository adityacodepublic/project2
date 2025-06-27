import { AutoForm } from "@/components/ui/autoform/AutoForm";
import { ZodProvider } from "@autoform/zod";
import { ReactNode } from "react";
import { toast } from "sonner";
import * as z from "zod";

const mySchema = z.object({
  username: z.string(),
});
const schemaProvider = new ZodProvider(mySchema);

export function MyForm({ children }: { children: ReactNode }) {
  return (
    <AutoForm
      schema={schemaProvider}
      onSubmit={(data) => {
        toast.success(<pre>{JSON.stringify(data)}</pre>);
      }}
    >
      {children}
    </AutoForm>
  );
}
