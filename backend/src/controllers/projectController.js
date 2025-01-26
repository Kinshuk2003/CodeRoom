import { createProjectService, getProjectTreeService } from '../service/projectService.js';

export async function createProjectController(req, res) {
    try {
        console.log("Creating project", req.body);

        //check body should contain projectName, language, and template
        if (!req.body.projectName) {
            return res.status(400).json({ message: "Project name is required" });
        }

        const { stdout, stderr, projectId } = await createProjectService(req.body);
        
        if (stderr) {
            return res.status(500).json({ message: stderr });
        }

        return res.status(200).json({ message: "Project created", projectId: projectId });
    }catch (error) {
        return res.status(500).json({ message: error });
    }
}


export async function getProjectTreeController(req, res) {
    try {
        const tree = await getProjectTreeService(req.params.projectId);
    
        return res.status(200).json({
            data: tree,
            success: true, 
            message: "Directory tree fetched successfully"
        });
    } catch (error) {
        return res.status(500).json({ message: error });
    }
}
