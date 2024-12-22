import { create } from "zustand";
import { useProjectTree } from "../hooks/queries/useProjectTree";
import { QueryClient } from "@tanstack/react-query";
import { getProjectTreeApi } from "../apis/projects";


export const useTreeStructureStore = create((set, get) => {

    const queryClient = new QueryClient();

    return {
        treeStructure: null,
        projectId: null,
        setProjectId: (projectId) => {
            set({ projectId });
        },

        setTreeStructure: async () => {
            const id = get().projectId;
            console.log('id', id);
            const data = await queryClient.fetchQuery({
                queryKey: [`projectTree-${id}`],
                queryFn: () => getProjectTreeApi({projectId: id}),
            });
            set({ treeStructure: data });
        }
    }
});
