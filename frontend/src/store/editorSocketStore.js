import { create } from 'zustand';
import { useActiveFileTabStore } from './activeFileTabStore';
import { useTreeStructureStore } from './treeStructureStore';
import { usePortStore } from './portStore';

export const useEditorSocketStore = create((set) => ({
    editorSocket: null,
    setEditorSocket: (incomingSocket) => { 
        
        const ActiveFileTabSetter = useActiveFileTabStore.getState().setActiveFileTab;
        const projectTreeStructureSetter = useTreeStructureStore.getState().setTreeStructure;
        const portSetter = usePortStore.getState().setPort;

        incomingSocket?.on('readFileSuccess', (data) => {
            console.log("Read Success socket", data);
            const fileExtension = data.path.split('.').pop();
            ActiveFileTabSetter(data.path, data.data, fileExtension);
        });

        incomingSocket?.on('writeFileSuccess', (data) => {
            incomingSocket.emit('readFile', { 
                fileOrFolderPath: data.path
            });
        });
        
        incomingSocket?.on('deleteFileSuccess', () => {
            projectTreeStructureSetter();
        });

        incomingSocket?.on('getPortSuccess', ({port}) => {
            portSetter(port);
        
        });


        set({ editorSocket: incomingSocket });
    
    },
}));