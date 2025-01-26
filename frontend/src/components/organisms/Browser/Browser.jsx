import { Input, Row} from "antd";
import { useEffect, useRef } from "react";
import { usePortStore } from "../../../store/portStore";
import { useEditorSocketStore } from "../../../store/editorSocketStore";
import { ReloadOutlined } from "@ant-design/icons";
import { Loader } from "../../atoms/Loader/Loader";


export const Browser = ({projectId}) => {
    const browserRef = useRef(null);
    const {port} = usePortStore();
    const {editorSocket} = useEditorSocketStore();

    useEffect(() => {
        if (!port) {
            editorSocket.emit("getPort", {containerName: projectId});
        }
    }, [port, editorSocket]);

    function handleRefresh() {
        if (browserRef.current) {
            browserRef.current.src = browserRef.current.src;
        }
    }

    if (!port) {
        return <Loader text="Loading Browser ..." />;
    }
    return (
        <Row style={{ backgroundColor: "#22212b"}}>
            <Input style={{
                        width: "100%",
                        height: "5vh",
                        color: "white",
                        fontFamily: "Fira Code",
                        backgroundColor: "#282a35",
                    }}
                prefix={<ReloadOutlined  onClick={handleRefresh}/>}
                defaultValue={`${import.meta.env.VITE_HOST}${port}`}
            />
            <iframe ref={browserRef}
                style={{
                    width: "100%",
                    height: "95vh",
                    border: "none",
                }}
                src={`${import.meta.env.VITE_HOST}${port}`}
            />
        </Row>
    )
}
