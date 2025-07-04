import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle } from "lucide-react";
import { ResetButton } from "../components/resetButton";
import { AutoForm } from "@/components/ui/autoform/AutoForm";
import { ZodProvider } from "@autoform/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

const color = z.string().array().min(1, "minimum one color required !");
const mySchema = z.object({
  color,
});

const schemaProvider = new ZodProvider(mySchema);

export interface AddColorsProps {
  value: z.infer<typeof color> | undefined;
  onValueChange: (value: z.infer<typeof color>) => void;
}

export default function AddColors({ value, onValueChange }: AddColorsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="flex items-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant={"outline"} className="rounded-full border-input">
            Add Colors
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>
              This is a dialog with a success toast button.
            </DialogDescription>
          </DialogHeader>
          <AutoForm
            schema={schemaProvider}
            values={{ color: value }}
            // formProps={{ ref: formRef }}
            onSubmit={(data) => {
              onValueChange(data.color);
              toast.success("data sent to server !" + JSON.stringify(data));
            }}
          >
            {Array.isArray(value) && !!value.length && (
              <div className="space-x-2">
                {value.map((item, index) => (
                  <Badge variant={"secondary"} key={index}>
                    {item}
                  </Badge>
                ))}
              </div>
            )}
            <div className="flex flex-col space-y-2">
              <Button
                type="submit"
                className="w-full bg-[#2833ff] hover:bg-[#494fc6]"
              >
                <CheckCircle className="h-4 w-4 mr-2 " /> Submit
              </Button>
            </div>
            <div className="flex flex-col space-y-1">
              <ResetButton
                type="reset"
                variant={"outline"}
                className="w-full"
                resetVal={{ colors: [] }}
              >
                <Circle className="h-4 w-4 mr-2" />
                Reset
              </ResetButton>
            </div>
          </AutoForm>
        </DialogContent>
      </Dialog>
    </div>
  );
}
