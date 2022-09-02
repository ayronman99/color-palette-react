import sizes from "./mdQueriesSizes"
import bg from  "./bg.svg"


export default {
    "@global": {
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0.01,
            transition: "opacity 500ms ease-out"
        }
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#A94F00",
        backgroundImage: `url(${bg})`, // background by SVGBackgrounds.com
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
    },
    container: {
       width: '50%',
       display: 'flex',
       alignItems: 'flext-start',
       flexDirection: 'column',
       flexWrap: 'wrap',
       [sizes.down("lg")]: {
         width: "80%"
       },
       [sizes.down("xs")]: {
        width: "70%"
      }
    },
    nav: {
        display: 'flex',
        width: "100%",
        justifyContent: 'space-between',
        alignItems: "center",
        color: 'white',
        "& a": {
            color: "white"
        }
    },
    palettes: {
       boxSizing: 'border-box',
       width: '100%',
       display: 'grid',
       gridTemplateColumns: 'repeat(3, 30%)',
       gridGap: '1rem',
       [sizes.down("md")]: {
        gridTemplateColumns: 'repeat(2, 50%)',
        gridGap: '2rem'
        },
       [sizes.down("xs")]: {
           gridTemplateColumns: 'repeat(1, 100%)',
           gridGap: '2rem'
       }
    }
};
