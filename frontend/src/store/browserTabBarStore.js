import { create } from 'zustand';


export const useBrowserTabBarStore = create((set) => {
    return {
        browser: false,
        setBrowser: () => {
            set({ browser: true});
        },
        setCopilot: () => {
            set({ browser: false});
        }
    }
});
