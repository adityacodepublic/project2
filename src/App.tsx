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
import { ResetButton } from "./resetButton";
import { DualErrorPage } from "./pages/DualErrorPage";
import { NestedFormsPage } from "./pages/NestedFormsPage";

type Page = "home" | "dualError" | "nestedForms";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleEmptyClick = () => {
    toast.success("this button does nothing !!!!");
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="border-b">
          <div className="max-w-7xl mx-auto px-4 py-4 flex gap-4">
            <Button
              onClick={() => setCurrentPage("home")}
              variant={currentPage === "home" ? "default" : "outline"}
            >
              Home
            </Button>
            <Button
              onClick={() => setCurrentPage("dualError")}
              variant={currentPage === "dualError" ? "default" : "outline"}
            >
              Dual Error Form
            </Button>
            <Button
              onClick={() => setCurrentPage("nestedForms")}
              variant={currentPage === "nestedForms" ? "default" : "outline"}
            >
              Nested Forms
            </Button>
          </div>
        </nav>

        {/* Page Content */}
        <div className="max-w-7xl mx-auto">
          {currentPage === "home" && (
            <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
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
                      <ResetButton
                        type="reset"
                        variant={"outline"}
                        className="w-full"
                        resetVal={{ username: "", type: "" as any }}
                      >
                        <Circle className="h-4 w-4 mr-2" />
                        Reset
                      </ResetButton>
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
          )}
          {currentPage === "dualError" && <DualErrorPage />}
          {currentPage === "nestedForms" && <NestedFormsPage />}
        </div>
      </div>

      <Toaster />
    </>
  );
}

export default App;
