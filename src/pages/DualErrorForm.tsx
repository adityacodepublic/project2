import { AutoForm } from "@/components/ui/autoform/AutoForm";
import { ZodProvider } from "@autoform/zod";
import { ReactNode } from "react";
import { toast } from "sonner";
import * as z from "zod/v3";

const mySchema = z.object({
  username: z.string(),
  array: z.array(
    z.object({
      text: z.string().min(4, "hi 4 char").describe("Text"),
      type: z.enum(["text", "video"]).optional().describe("Type"),
      url: z
        .string()
        .regex(/^\/[^\s]*$/, "URL must be a relative path starting with /")
        .describe("URL (e.g., /docs/x)"),
    }),
  ),
});
const schemaProvider = new ZodProvider(mySchema);

export function DualErrorForm({ children }: { children: ReactNode }) {
  return (
    <AutoForm
      schema={schemaProvider}
      onSubmit={(data) => {
        toast.success(<pre>{JSON.stringify(data)}</pre>);
      }}
      withSubmit
    >
      {children}
    </AutoForm>
  );
}
