import { useQuery } from '@tanstack/react-query';
import { getProjectTreeApi } from '../../apis/projects';

export const useProjectTree = (projectId) => {
    const { isLoading, isError, projectTree, error } = useQuery({
        queryFn: () => getProjectTreeApi({projectId}),
        staleTime: 1000 * 60 * 5,
    });
    
    return {
        isLoading,
        isError,
        projectTree,
        error,
    };
}