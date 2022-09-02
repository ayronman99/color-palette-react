import sizes from "./mdQueriesSizes.js"

export default { 
    paletteStyle: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    paletteColorStyle: {
        height: "90%"
    },
    goBack: {
        position: "relative",
        width: "20%",
        height: "50%",
        margin:"0 auto",
        display: "inline-block",
        cursor: "pointer",
        marginBottom: "-5px",
        backgroundColor: "#121212",
        "& a": {
            color: "white",
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
            border: "none"
        },
        [sizes.down("md")]: {
            width: "100%",
            height: "15%"
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: "10%"
        }
    }
}
