import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { CheckCircle } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSuccessClick = () => {
    toast.success('Success');
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button>
              Open Dialog
            </Button>
          </DialogTrigger>
          
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>
                This is a dialog with a success toast button.
              </DialogDescription>
            </DialogHeader>
            
            <div className="flex flex-col space-y-4 pt-4">
              <Button 
                onClick={handleSuccessClick}
                className="w-full"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Show Success Toast
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <Toaster />
    </>
  );
}

export default App;