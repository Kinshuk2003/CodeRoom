import axios from '../config/axiosConfig';

export const createProjectApi = async (requestBody) => {
    try {
        console.log('requestBody:', requestBody);
        const response = await axios.post('/api/v1/projects', requestBody);
        return response.data;
    }catch (error) {
        console.log(error);
        throw error;
    }
}

export const getProjectTreeApi = async ({projectId}) => {
    try {
        const response = await axios.get(`/api/v1/projects/${projectId}/tree`);
        return response.data.data;
    }catch (error) {
        console.log(error);
        throw error;
    }
}
