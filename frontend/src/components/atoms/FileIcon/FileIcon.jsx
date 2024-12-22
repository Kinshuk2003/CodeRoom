import { RiJavascriptFill, RiReactjsFill, RiHtml5Fill, RiCss3Fill, RiFileImageFill } from "react-icons/ri";
import { SiGitignoredotio } from "react-icons/si";

export const FileIcon = ({extension}) => {
    const IconMapper = {
        "js" : <RiJavascriptFill color="yellow" style={{height:'20px', width: '20px'}}/>,
        "jsx": <RiReactjsFill color="cyan" style={{height:'20px', width: '20px'}}/>,
        "html": <RiHtml5Fill color="red" style={{height:'20px', width: '20px'}}/>,
        "css": <RiCss3Fill color="cyan" style={{height:'20px', width: '20px'}}/>,
        "gitignore": <SiGitignoredotio color="orange" style={{height:'20px', width: '20px'}}/>,
        "svg": <RiFileImageFill color="pink" style={{height:'20px', width: '20px'}}/>,
    }
    
    
    return (
        <>
            {IconMapper[extension]}
        </>
    )

}