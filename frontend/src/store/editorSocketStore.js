import { create } from 'zustand';
import { useActiveFileTabStore } from './activeFileTabStore';
import { useTreeStructureStore } from './treeStructureStore';

export const useEditorSocketStore = create((set) => ({
    editorSocket: null,
    setEditorSocket: (incomingSocket) => { 
        
        const ActiveFileTabSetter = useActiveFileTabStore.getState().setActiveFileTab;
        const projectTreeStructureSetter = useTreeStructureStore.getState().setTreeStructure;


        incomingSocket?.on('readFileSuccess', (data) => {
            console.log(data);
            ActiveFileTabSetter(data.path, data.data);
        });

        incomingSocket?.on('writeFileSuccess', (data) => {
            incomingSocket.emit('readFile', { 
                fileOrFolderPath: data.path
            });
        });
        
        incomingSocket?.on('deleteFileSuccess', () => {
            projectTreeStructureSetter();
        });

        set({ editorSocket: incomingSocket });
    
    },
}));