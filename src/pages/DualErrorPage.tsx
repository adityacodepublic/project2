import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { DualErrorForm } from "./DualErrorForm";

export function DualErrorPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Dual Error Form</DialogTitle>
              <DialogDescription>
                Form with array validation and dual error display.
              </DialogDescription>
            </DialogHeader>
            <DualErrorForm>
              <></>
            </DualErrorForm>
          </DialogContent>
        </Dialog>
      </div>

      <Toaster />
    </>
  );
}
