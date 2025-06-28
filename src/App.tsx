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
import { toast } from "sonner";
import { CheckCircle, Circle } from "lucide-react";
import { MyForm } from "./myform";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEmptyClick = () => {
    toast.success("this button does nothing !!!!");
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>
                This is a dialog with a success toast button.
              </DialogDescription>
            </DialogHeader>
            <MyForm>
              <div className="flex flex-col space-y-2">
                <Button
                  type="submit"
                  className="w-full bg-[#2833ff] hover:bg-[#494fc6]"
                >
                  <CheckCircle className="h-4 w-4 mr-2 " />
                  Submit
                </Button>
              </div>
              <div className="flex flex-col space-y-1">
                <Button
                  onClick={handleEmptyClick}
                  type="reset"
                  variant={"outline"}
                  className="w-full"
                >
                  <Circle className="h-4 w-4 mr-2" />
                  Empty Button
                </Button>
              </div>
            </MyForm>
          </DialogContent>
        </Dialog>
      </div>

      <Toaster />
    </>
  );
}

export default App;
