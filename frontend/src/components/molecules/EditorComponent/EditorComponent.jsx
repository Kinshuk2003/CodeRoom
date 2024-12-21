import Editor from '@monaco-editor/react';
import { useEffect, useState } from 'react';

export default function EditorComponent() {
    
    const [editorState, setEditorState] = useState({
        theme: null,
    });

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
    
    return (
        <>
            {   editorState.theme &&
                <Editor
                    height= {'80vh'}
                    width= {'100%'}
                    defaultLanguage="javascript"
                    defaultValue="console.log('Hello, World!');"
                    options={
                        {
                            minimap: {
                                enabled: false
                            }
                        }
                    }
                    onMount={handleEditorTheme}
                />
        }
        
        </>
    )
}