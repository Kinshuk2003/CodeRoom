import Editor from '@monaco-editor/react';
import { useEffect, useState } from 'react';
import { useActiveFileTabStore } from '../../../store/activeFileTabStore';
import { useEditorSocketStore } from '../../../store/editorSocketStore';


export default function EditorComponent() {

    let timerId = null;
    const [editorState, setEditorState] = useState({
        theme: null,
    });

    const {activeFileTab} = useActiveFileTabStore();
    const {editorSocket} = useEditorSocketStore();

    async function downloadTheme() {
        const response = await fetch('/Dracula.json');
        const data = await response.json();
        setEditorState({ ...editorState, theme: data });
    }

    useEffect(() => {
        downloadTheme();
    }, []);
    
    function handleEditorTheme(editor, monaco) {
        monaco.editor.defineTheme('dracula', editorState.theme);
        monaco.editor.setTheme('dracula');
    }

    function handleChange(value) {
        // clear old timer
        if (timerId !== null) {
            clearTimeout(timerId);
        }
        
        timerId = setTimeout(() => {
            const editorContent = value;
            editorSocket.emit('writeFile', {
                data: editorContent,
                fileOrFolderPath: activeFileTab.path
            });
            
        }, 2000);   

    }
    
    return (
        <>
            {   editorState.theme &&
                <Editor
                    height= {'100vh'}
                    width= {'100%'}
                    defaultLanguage={'undefined'}
                    language={extensionToFileType(activeFileTab?.extension)}     
                    defaultValue="console.log('Hello, World!');"
                    value={activeFileTab?.value ? activeFileTab.value : "console.log('hellow World');"}
                    options={
                        {
                            fontSize: 18,
                            fontFamily: 'monospace',
                        }
                    }
                    onChange={handleChange}
                    onMount={handleEditorTheme}
                />
            }
        </>
    )
}