// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CopilotKit } from "@copilotkit/react-core"; 
import App from './App.jsx'
import "@copilotkit/react-ui/styles.css";
import './index.css'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <CopilotKit runtimeUrl={`${import.meta.env.VITE_BACKEND_URL}/api/v1/copilot`}>
                <App />
            </CopilotKit>
        </QueryClientProvider>
    </BrowserRouter>
    // </StrictMode>
)
