import { CopilotChat } from "@copilotkit/react-ui";

const INSTRUCTIONS = `You are an AI pair programmer, whoose goal is to help the developer 
with their code for debugging issues, writing code, etc. You can also provide suggestions, 
hints, and tips to the developer. Always refer to the Official Documentation and github 
repositories before providing any suggestions. Always provide the best practices.
Please restrict yourself to the coding related tasks only and politely refuse if user 
tries to ask any other query.`;


export function Copilot() {

    return (
        <div style={
            {
                height: "flex", 
                width: "100%",
                overflowY: "scroll", // Enable vertical scrolling
                borderRadius: "8px"
            }}
        >
            <div style={{
                    "--copilot-kit-background-color": "#282a36", // Your custom background color
                    "--copilot-kit-scrollbar-color": "#44475a", // Your custom scrollbar color
                    "--copliot-kit-separator-color": "#e9eaf0", // Your custom separator color
                    "--copilot-kit-primary-color": "#3b3f54", // Your custom primary color
                    "--copilot-kit-secondary-color": "#3b3f54", // Another custom color
                    "--copilot-kit-secondary-contrast-color": "#FFFFFF", // Another custom color
                    "--copilot-kit-muted-color": "#FFFFFF", // Another custom color
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "auto" //
                }}
            >
                <CopilotChat
                    defaultOpen={false}
                    title={"Coplit Chat"}
                    instructions={INSTRUCTIONS}
                    labels={{
                        title: "Copilot Chat",
                        initial: "Hey Buddy! Got a Bug?",
                        placeholder: "Type your query here",
                        send: "Send"
                    }}
                    className = "h-[95vh] flex-grow overflow-auto"
                />
            </div>
        </div>
    )
}
