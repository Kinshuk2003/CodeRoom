import { RiJavascriptFill, RiReactjsFill, RiHtml5Fill, RiCss3Fill, RiFileImageFill, 
    RiBracesFill, RiVuejsFill, RiSvelteFill } from "react-icons/ri";
import { SiGitignoredotio, SiTypescript } from "react-icons/si";
import { CiCircleAlert } from "react-icons/ci";

export const FileIcon = ({extension}) => {
    const IconMapper = {
        "js" : <RiJavascriptFill color="yellow" style={{height:'20px', width: '20px'}}/>,
        "jsx": <RiReactjsFill color="cyan" style={{height:'20px', width: '20px'}}/>,
        "ts" : <SiTypescript color="cyan" style={{height:'20px', width: '20px'}}/>,
        "tsx": <RiReactjsFill color="cyan" style={{height:'20px', width: '20px'}}/>,
        "html": <RiHtml5Fill color="red" style={{height:'20px', width: '20px'}}/>,
        "css": <RiCss3Fill color="cyan" style={{height:'20px', width: '20px'}}/>,
        "gitignore": <SiGitignoredotio color="orange" style={{height:'20px', width: '20px'}}/>,
        "svg": <RiFileImageFill color="pink" style={{height:'20px', width: '20px'}}/>,
        "jpeg": <RiFileImageFill color="pink" style={{height:'20px', width: '20px'}}/>,
        "jpg": <RiFileImageFill color="pink" style={{height:'20px', width: '20px'}}/>,
        "png": <RiFileImageFill color="pink" style={{height:'20px', width: '20px'}}/>,
        "json": <RiBracesFill color="pink" style={{height:'20px', width: '20px'}}/>,
        "md": <CiCircleAlert color="pink" style={{height:'20px', width: '20px'}}/>,
        "vue": <RiVuejsFill color="green" style={{height:'20px', width: '20px'}}/>,
        "svelte": <RiSvelteFill color="red" style={{height:'20px', width: '20px'}}/>,



    }
    
    
    return (
        <>
            {IconMapper[extension]}
        </>
    )

}