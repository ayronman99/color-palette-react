import chroma from "chroma-js"; 
import sizes from "./mdQueriesSizes.js";

export default {
    colorBox: {
        position: "relative",
        width: "20%",
        height: props => props.showMore ? "25%" : "50%",
        margin:"0 auto",
        display: "inline-block",
        cursor: "pointer",
        marginBottom: "-5px",
        "&:hover button": {
            opacity: 1
        },
        [sizes.down("md")]: {
            width: "50%",
            height: props => props.showMore ? "10%" : "20%"
        },
        [sizes.down("sm")]: {
            width: "100%",
            height: props => props.showMore ? "7%" : "10%"
        }
    },
    goLight: {
        color: props => chroma(props.background).luminance() <= 0.1 ? "#c3cad6" : "#121212"
    },
    goDark: {
        color: props => chroma(props.background).luminance() >= 0.3 ? "#121212" : "#c3cad6" 
    },
    copyButton: {
        color: props => chroma(props.background).luminance() >= 0.3 ? "#121212" : "#dde2eb",
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255,255,255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        textDecoration: "none",
        border: "none",
        opacity: "0"
    },
    seeMore: {
        color: props => chroma(props.background).luminance() >= 0.3 ? "#121212" : "#dde2eb",
        background: "rgba(255,255,255, 0.3)",
        position: "absolute",
        border: "none",
        right: "0",
        bottom: "0",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px",
        textTransform: "uppercase"
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.65s ease-in-out",
        transform: "scale(0.1)"
    },
    showOverlay: {
        opacity:" 1",
        transform: "scale(50)",
        zIndex:" 10",
        position: "absolute"
    },
    copyMsg: {
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontSize: "4rem",
        transform: "scale(0.1)",
        opacity: "0",
        color: "white",
        "& h2": {
            fontWeight: "400",
            textShadow: "1px 2px black",
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            textAlign: "center",
            marginBottom: "0",
            padding: "1rem",
            textTransform: "uppercase",
            [sizes.down("sm")] : {
                fontSize: "5rem"
            }
        },
        "& p": {
            fontSize: "2rem",
            fontWeight: "100"
        }
    },
    showMsg: {
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4s ease-in-out",
        transitionDelay:" 0.3s" 
    }

}