import { Toaster } from "sonner";
import { NestedForm } from "./components/nested-form/nested-form";

function App() {
  return (
    <div className="flex items-center justify-center mt-10">
      <Toaster position="bottom-center" />
      <div className="border rounded-lg w-[32rem]  p-10">
        <NestedForm />
      </div>
    </div>
  );
}

export default App;
