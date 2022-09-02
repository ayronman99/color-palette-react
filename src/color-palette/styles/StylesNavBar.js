import sizes from "./mdQueriesSizes"

export default {
    navbar: {
        display: "flex",
        alignItems: "center",
       justifyContent: "flex-start",
        height: "6vh"
      },
      logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: "'Roboto', sans-serif",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black"
          },
        [sizes.down("sm")]: {
          display: "none"
        }
      },
      slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        "& rc-slider-rail": {
            height: "8px"
          },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover, .rc-slider-handle:focus": {
            backgroundColor: "green",
            outline: "none",
            border: "2px solid green",
            boxShadow: "none",
            width: "16px",
            height: "16px",
            marginLeft: "-7px",
            marginRight: "-3px",
          },
      "& rc-slider-track": {
        backgroundColor: "transparent"
          },
      [sizes.down("xs")]: {
        width: "150px"
      }
    },
    selectContainer: {
        marginLeft: "auto",
         marginRight: "1rem"
       },
    goBack: {
      display: "none",
      marginRight: "15px",
      padding: "0 13px",
      fontSize: "22px",
      backgroundColor: "#c6d1cd",
      height: "100%",
      [sizes.down("sm")]: {
        display: "inline-block"
      }
    }
      
}