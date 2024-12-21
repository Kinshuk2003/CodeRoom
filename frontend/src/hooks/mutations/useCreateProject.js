import { useMutation } from '@tanstack/react-query';
import { createProjectApi } from '../../apis/projects.js';


export const useCreateProject = () => {
    const { mutateAsync, isPending, isSuccess, error } = useMutation({
        mutationFn: createProjectApi,
        onSuccess: (data) => {
            console.log('Project created successfully', data);
        },
        onError: (error) => {
            console.log('Error creating project', error);
        }
    });

    return { 
        createProjectMutation: mutateAsync, 
        isPending, 
        isSuccess, 
        error 
    }
}