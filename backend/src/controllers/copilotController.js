import {
  CopilotRuntime,
  GoogleGenerativeAIAdapter,
  copilotRuntimeNodeHttpEndpoint,
} from '@copilotkit/runtime';
 
const serviceAdapter = new GoogleGenerativeAIAdapter({ model: 'gemini-1.5-flash'});


export async function copliotController(req, res, next) {
    console.log('Copilot controller called', req.body);
    const runtime = new CopilotRuntime();
    const handler = copilotRuntimeNodeHttpEndpoint({
      endpoint: '/copilot',
      runtime,
      serviceAdapter,
    });
   
    return handler(req, res, next);
}