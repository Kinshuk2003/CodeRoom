import { Routes, Route } from 'react-router-dom';
import CreateProject from './pages/CreateProject';
import Landing from './pages/Landing';
import ProjectPlayground from './pages/ProjectPlayground';


export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/project/create" element={<CreateProject />} />
            <Route path="/project/:projectId" element={<ProjectPlayground />} />
        </Routes>
    )
}
