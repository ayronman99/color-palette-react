import bg from  "./bg.svg"


export default {
    root: {
        backgroundColor: "#A94F00",
        backgroundImage: `url(${bg})`, // background by SVGBackgrounds.com
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "100vh"
    },
    page: {
        height: "100%",
        position: "absolute",
        width: "100%"
    }
};
