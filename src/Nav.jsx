import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "materialize-css/dist/css/materialize.min.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
// import PageviewTwoToneIcon from "@material-ui/icons/PageviewTwoTone";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    // fontSize: "40px",
  },
  menuIcon: {
    fontSize: "40px",
  },
  title: {
    flexGrow: 1,
  },
  youtube: {
    color: "white",
    fontSize: "25px",
  },
  navbar: {
    backgroundColor: "#002147",
    paddingRight: "1%",
    paddingLeft: "1%",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  sideBarFont: {
    fontFamily: "Sans-serif",
    color: "#002147",
    fontSize: "18px",
  },
  sideBarLogo: {
    color: "#002147",
  },
}));

export default function Nav() {
  const classes = useStyles();
  const history = useHistory();
  const matches = useMediaQuery("(min-width:800px)");

  const [state, setState] = React.useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText onClick={() => history.push("/TransmuteAI")}>
            <div className={classes.sideBarFont}>Home</div>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText>
            <div className={classes.sideBarFont}>Projects</div>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText>
            <div className={classes.sideBarFont}>Members</div>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText>
            <div className={classes.sideBarFont}>Courses</div>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText
            onClick={() => history.push("/TransmuteAI/publications")}
          >
            <div className={classes.sideBarFont}>Publications</div>
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText onClick={() => history.push("/TransmuteAI/joinus")}>
            <div className={classes.sideBarFont}>Join Us</div>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {matches ? (
        <div className={classes.root}>
          <AppBar position="static" className={classes.navbar}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Transmute AI
              </Typography>
              <Button
                color="inherit"
                onClick={() => history.push("/TransmuteAI")}
              >
                Home
              </Button>
              <Button color="inherit">Projects</Button>
              <Button color="inherit">Members</Button>
              <Button color="inherit">Courses</Button>
              <Button
                color="inherit"
                onClick={() => history.push("/TransmuteAI/publications")}
              >
                Publications
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/TransmuteAI/joinus")}
              >
                Join us
              </Button>
              <a
                href="https://www.youtube.com/channel/UCSBllKwExVPNLDrK1Ujexkw"
                target="_blank"
                rel="noreferrer"
              >
                <YouTubeIcon className={classes.youtube} />
              </a>
            </Toolbar>
          </AppBar>
        </div>
      ) : (
        <div>
          <AppBar position="static" className={classes.navbar}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <div>
                  <React.Fragment key={"top"}>
                    <MenuIcon
                      onClick={toggleDrawer("top", true)}
                      className={classes.menuIcon}
                    />
                    <Drawer
                      anchor={"top"}
                      open={state["top"]}
                      onClose={toggleDrawer("top", false)}
                    >
                      {list("top")}
                    </Drawer>
                  </React.Fragment>
                </div>
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Transmute AI
              </Typography>
              <a
                href="https://www.youtube.com/channel/UCSBllKwExVPNLDrK1Ujexkw"
                target="_blank"
                rel="noreferrer"
              >
                <YouTubeIcon className={classes.youtube} />
              </a>
            </Toolbar>
          </AppBar>
        </div>
      )}
    </div>
  );
}
