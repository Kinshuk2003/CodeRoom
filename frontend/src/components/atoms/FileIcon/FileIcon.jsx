/* eslint-disable react/prop-types */
import { RiJavascriptFill, RiReactjsFill, RiHtml5Fill, RiCss3Fill, RiFileImageFill, 
    RiBracesFill, RiVuejsFill, RiSvelteFill } from "react-icons/ri";
import { SiGitignoredotio, SiTypescript } from "react-icons/si";
import { CiCircleAlert } from "react-icons/ci";

export const FileIcon = ({extension}) => {
    const IconMapper = {
        "js" : <RiJavascriptFill color="yellow" />,
        "jsx": <RiReactjsFill color="cyan"/>,
        "ts" : <SiTypescript color="cyan" />,
        "tsx": <RiReactjsFill color="cyan" />,
        "html": <RiHtml5Fill color="red" />,
        "css": <RiCss3Fill color="cyan" />,
        "gitignore": <SiGitignoredotio color="orange" />,
        "svg": <RiFileImageFill color="pink"/>,
        "jpeg": <RiFileImageFill color="pink" />,
        "jpg": <RiFileImageFill color="pink" />,
        "png": <RiFileImageFill color="pink" />,
        "json": <RiBracesFill color="pink" />,
        "md": <CiCircleAlert color="pink" />,
        "vue": <RiVuejsFill color="green" />,
        "svelte": <RiSvelteFill color="red" />,



    }
    
    
    return (
        <>
            {IconMapper[extension]}
        </>
    )

}