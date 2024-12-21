import './EditorButton.css'

export const EditorButton = ({isActive = false}) => {
    
    function handleClick() {
        console.log('Button clicked')
    }
    
    
    return (
        <button
            className="editor-button"
            style={{ 
                color: isActive ? 'white' : '#959eba',
                backgroundColor: isActive ? '#303242' : '#4a4859',
                borderTop: isActive ? '2px solid #4351b7' : 'none'
            }}
            onClick={handleClick}
        >
            file.js
        </button>
    )
}