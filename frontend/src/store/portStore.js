import { create } from "zustand";


export const usePortStore = create((set) => ({
    port: null,
    setPort: (incomingPort) => {
        set({ port: incomingPort });
    },
}));
