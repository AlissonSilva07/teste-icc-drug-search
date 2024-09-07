import { RouterProvider } from "react-router-dom"
import { route } from "./router/main.routes"
import { ContextProviders } from "./shared/contexts/main.context"

function App() {

  return (
    <ContextProviders>
      <RouterProvider router={route} />
    </ContextProviders>
  )
}

export default App
