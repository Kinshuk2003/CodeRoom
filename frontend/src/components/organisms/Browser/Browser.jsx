import { Input, Row} from "antd";

export const Browser = ({port}) => {
    
    const browserRef = useRef(null);
    if (!port) {
        return <div> Loading ...</div>
    }
    return (
        <Row
            style={{
                backgroundColor: "#22212b",
            }}
        
        >
        <Input
            style={{
                width: "100%",
                height: "30%",
                color: "white",
                fontFamily: "Fira Code",
                backgroundColor: "#282a35",
            }}
            defaultValue={`http://localhost:${port}`}
        />
        <iframe
            ref={browserRef}
            style={{
                width: "100%",
                height: "70%",
                border: "none",
            }}
            src={`http://localhost:${port}`}
        />

        </Row>
    )
}

