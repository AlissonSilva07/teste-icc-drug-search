import { RouterProvider } from "react-router-dom"
import { route } from "./router/main.routes"
import { ContextProviders } from "./shared/contexts/main.context"
import { useEffect } from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

function App() {

  const { toasts } = useToasterStore();

  const TOAST_LIMIT = 1;

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <ContextProviders>
      <Toaster position="top-right" />
      <RouterProvider router={route} />
    </ContextProviders>
  )
}

export default App
