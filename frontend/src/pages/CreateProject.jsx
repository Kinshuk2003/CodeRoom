import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { LuCodeXml, LuBraces, LuSettings2 } from "react-icons/lu";
import { useCreateProject } from "../hooks/mutations/useCreateProject";
import { Logo } from "../components/atoms/Logo/Logo";
import { Footer } from "../components/atoms/Footer/Footer";
import { Loader } from "../components/atoms/Loader/Loader";


function CreateProject() {
    const [config, setConfig] = useState({
        projectName: '',
        framework: 'react',
        language: 'typescript'
    });

    const Navigator = useNavigate();
    const {createProjectMutation, isPending, error} = useCreateProject();

    async function handleCreateProject(event) {
        event.preventDefault();
        try {
            const response = await createProjectMutation(config);
            console.log('Project created successfully', response);
            console.log("Now we should redirect to the editor");
            Navigator(`/project/${response.projectId}`);
        } catch (error) {
            console.log('Error creating project', error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setConfig(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
            <Logo />
            
            <div className="max-w-2xl mx-auto ">
                <div className="flex items-center gap-3 mb-8">
                    <LuCodeXml className="w-8 h-8 text-blue-400" />
                    <h1 className="text-3xl font-bold">Create Your Project</h1>
                </div>
        
                <form onSubmit={handleCreateProject} className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-600 transition-all duration-1000 delay-900 hover:border-[#0098fa] hover:shadow-lg hover:shadow-gray-800">
                    <div className="space-y-2">
                        <label htmlFor="projectName" className="flex items-center gap-2 text-sm font-medium">
                            <LuSettings2 className="w-4 h-4" />
                            Name your Project
                        </label>
                        <input type="text"
                            id="projectName"
                            name="projectName"
                            value={config.projectName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                            placeholder="my-awesome-project"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="framework" className="flex items-center gap-2 text-sm font-medium">
                            <LuBraces className="w-4 h-4" />
                            Choose your Framework
                        </label>
                        <select id="framework"
                            name="framework"
                            value={config.framework}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                        >
                            <option value="react">React</option>
                            <option value="vue">Vue</option>
                            <option value="svelte">Svelte</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="language" className="flex items-center gap-2 text-sm font-medium">
                            <LuCodeXml className="w-4 h-4" />
                            Select the Language
                        </label>
                        <select id="language"
                            name="language"
                            value={config.language}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                        >
                            <option value="typescript">TypeScript</option>
                            <option value="javascript">JavaScript</option>
                        </select>
                    </div>

                    <button type="submit"
                        className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 flex items-center justify-center gap-2"
                    >
                        <LuCodeXml className="w-5 h-5" />
                        Create
                    </button>
                </form>

                { isPending && <Loader text='Creating Project...' /> }
                { error && <p className='text-red-500'>{error.message}</p> }

            
            </div>

            <Footer /> 
        </div>
    );
}

export default CreateProject;