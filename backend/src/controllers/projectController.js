import util from 'util';
import child_process from 'child_process';
import fs from 'fs/promises';
import uuid4 from 'uuid4';
import { REACT_PROJECT_COMMAND } from '../config/serverConfig.js';

const execPromisified = util.promisify(child_process.exec);


export async function createProjectController(req, res) {
    
    //create a unique id and then inside the projects folder
    //create a folder with that id (UUID)
    const projectId = uuid4();
    console.log(projectId);
    await fs.mkdir(`.\\projects\\${projectId}`);
    // After this call the npm create vite project command inside the project folder.
    const { stdout, stderr } = await execPromisified(REACT_PROJECT_COMMAND,
        {
            cwd: `.\\projects\\${projectId}`,
        }
    );
    if (stderr) {
        return res.status(500).json({ message: stderr });
    }

    return res.status(200).json({ message: "Project created", projectId: projectId });
}