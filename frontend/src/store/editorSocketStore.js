import { create } from 'zustand';
import { useActiveFileTabStore } from './activeFileTabStore';
import { useTreeStructureStore } from './treeStructureStore';
import { usePortStore } from './portStore';
import { useTabStore } from './tabBarStore';


export const useEditorSocketStore = create((set) => ({
    editorSocket: null,
    setEditorSocket: (incomingSocket) => { 
        
        const ActiveFileTabSetter = useActiveFileTabStore.getState().setActiveFileTab;
        const addTabToBarSetter = useTabStore.getState().addTab;
        const projectTreeStructureSetter = useTreeStructureStore.getState().setTreeStructure;
        const portSetter = usePortStore.getState().setPort;

        incomingSocket?.on('readFileSuccess', (data) => {
            console.log("Read File Success");
            const fileExtension = data.path.split('.').pop();
            ActiveFileTabSetter(data.path, data.data, fileExtension);
            addTabToBarSetter(data);
        });

        incomingSocket?.on('writeFileSuccess', (data) => {
            console.log("Write Success File success");
            incomingSocket.emit('readFile', { 
                fileOrFolderPath: data.path
            });
        });
        
        incomingSocket?.on('deleteFileSuccess', () => {
            projectTreeStructureSetter();
        });

        incomingSocket?.on('getPortSuccess', ({port}) => {
            console.log("Port Success socket", port);
            portSetter(port);
        
        });

        set({ editorSocket: incomingSocket });
    
    },
}));
