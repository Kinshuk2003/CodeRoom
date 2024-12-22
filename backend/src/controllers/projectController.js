import { createProjectService, getProjectTreeService } from '../service/projectService.js';

export async function createProjectController(req, res) {
    
    const { stdout, stderr, projectId } = await createProjectService();
    
    if (stderr) {
        return res.status(500).json({ message: stderr });
    }

    return res.status(200).json({ message: "Project created", projectId: projectId });
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