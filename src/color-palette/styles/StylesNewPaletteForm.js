import sizes from "./mdQueriesSizes.js";


const drawerWidth = 350;


export default (theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      flexDirection: "row",
      justifyContent: "space-between",
      height: "69px"
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 20,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      display: "flex",
      alignItems: "center"
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      width: "100%",
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      height: "calc(100vh - 64px)",
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    chrContainer: {
      width: "90%",
      marginRight: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%"
    },
    chrPicker: {
      width: "100% !important",
      marginTop: "2rem",
    },
    addColor: {
      width: "100%",
      padding: "1rem",
      marginTop: "1rem",
      fontSize: "2rem"
    },
    colorName: {
      width: "100%",
      height: "69px"
    },
    buttons: {
      width: "100%"
    },
    button: {
      width: "50%"
    },
    navBtns: {
        "& a": {
          textDecoration: "none"
        },
        [sizes.down("xs")]: {
          marginRight: "0.75rem"
        }
    },
    saveBtns: {
      margin: ".5rem 0.5rem",
      [sizes.down("xs")]: {
        margin: "0 0.25rem",
        marginTop: "0.5rem"
      }
    }
  });
