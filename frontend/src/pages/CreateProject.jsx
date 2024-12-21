import { useCreateProject } from "../hooks/mutations/useCreateProject";
import { useNavigate } from "react-router-dom";
import { Button, Layout} from 'antd';

export default function CreateProject() {
    const { Header, Content, Footer } = Layout;

    const Navigator = useNavigate();

    const layoutStyle = {
        borderRadius: 8,
        overflow: 'hidden',
        width: 'calc(100% - 8px)',
        maxWidth: 'calc(100% - 8px)'
    };

    const {createProjectMutation, isPending} = useCreateProject();

    async function handleCreateProject() {
        try {
            const response = await createProjectMutation();
            console.log("Now we should redirect to the editor");
            Navigator(`/project/${response.projectId}`);
        } catch (error) {
            console.log('Error creating project', error);
        }
    }


    return (
        <Layout style={layoutStyle}>
            <Header>Header</Header>
            <Content>
                <div>
                    <h1>Create Project</h1>
                    <Button onClick={handleCreateProject}>
                        Create Playground
                    </Button>
                    {isPending && <p>Creating Project ...</p>}
                </div>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}