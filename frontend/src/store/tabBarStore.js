import { create } from 'zustand';


export const useTabStore = create((set) => ({
    tabs: [],
    
    addTab: (file) => {
        set((state) => {
            // Check if tab already exists
            const existingTab = state.tabs.find(tab => tab.path === file.path);
            if (existingTab) {
                // If tab exists, make it active
                return {
                    tabs: state.tabs.map(tab => ({
                        ...tab,
                        isActive: tab.path === file.path
                    }))
                };
            }

            // If tab doesn't exist, create new tab
            const newTab = {
                id: crypto.randomUUID(),
                title: file.path.split('\\').pop(),
                path: file.path,
                isActive: true
            };
        
            // Add new tab and deactivate others
            return {
                tabs: state.tabs.map(tab => ({
                    ...tab,
                    isActive: false
                })).concat(newTab)
            };
        });
    },

    activateTab: (tabId) => {
        set((state) => ({
            tabs: state.tabs.map(tab => ({
                ...tab,
                isActive: tab.id === tabId
            }))

        }));
    },

    closeTab: (tabId) => {
        set((state) => {
            const tabToClose = state.tabs.find(tab => tab.id === tabId);
            const newTabs = state.tabs.filter(tab => tab.id !== tabId);
      
            // If we're closing the active tab, activate the last tab
            if (tabToClose?.isActive && newTabs.length > 0) {
                newTabs[newTabs.length - 1].isActive = true;
            }
      
            return { tabs: newTabs };
        });
    }
}));
