import uuid4 from "uuid4";
import fs from "fs/promises";
import path from "path";
import { execPromisified } from "../utils/execUtility.js";
import { REACT_PROJECT_COMMAND } from "../config/serverConfig.js";
import directoryTree from "directory-tree";


export const createProjectService = async () => {
    try {

        const projectId = uuid4();
        console.log(projectId);
        await fs.mkdir(`.\\projects\\${projectId}`);
        // After this call the npm create vite project command inside the project folder.
        const { stdout, stderr } = await execPromisified(REACT_PROJECT_COMMAND,
            {
                cwd: `.\\projects\\${projectId}`,
            }
        );
        return {stdout, stderr, projectId};
    } catch (error) {
        console.error(error);
        return {error: error};
    }
    //create a unique id and then inside the projects folder
    //create a folder with that id (UUID)
    
}


export const getProjectTreeService = async (projectId) => {
    const projectPath = path.resolve(`.\\projects\\${projectId}`);
    const tree =directoryTree(projectPath);
    return tree;
}