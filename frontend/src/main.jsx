// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CopilotKit } from "@copilotkit/react-core"; 
import "@copilotkit/react-ui/styles.css";
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        {/* Use the public api key you got from Copilot Cloud  */}
        {/* <CopilotKit publicApiKey={import.meta.env.VITE_COPILOT_PUBLIC_API_KEY}>  */}
        <CopilotKit runtimeUrl={`${import.meta.env.VITE_BACKEND_URL}/api/v1/copilot`}>
          <App />
        </CopilotKit>
      </QueryClientProvider>
    </BrowserRouter>
  // </StrictMode>,
)
