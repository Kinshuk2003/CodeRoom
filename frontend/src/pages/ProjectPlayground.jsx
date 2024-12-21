import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/EditorComponent/EditorComponent";
import { EditorButton } from "../components/atoms/EditorButton/EditorButton";

export default function ProjectPlayground() {
    
    const {projectId} = useParams();

    return (
    <>
        <div>
            <h1>Project Playground for ID:  {projectId}</h1>
        </div>
        <div>
            <EditorButton isActive={true}/>
            <EditorButton />
            <EditorComponent/>
            
        </div>
    </>

    )
}