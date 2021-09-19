import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingLeft: "22%",
    paddingRight: "22%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
      padding: "0%",
    },
  },
  heading: {
    fontFamily: "sans-serif",
    width: "40%",
    fontSize: "38px",
    marginLeft: "20%",
    color: "#002147",
    [theme.breakpoints.up("md")]: {
      fontFamily: "sans-serif",
      width: "40%",
      marginLeft: "38%",
      fontSize: "55px",
      color: "#002147",
    },
  },
  images: {
    width: "100%",
    boxShadow: "0 0 12px #9E9E9E",
    borderRadius: "5px",
    paddingBottom: "3%",
    float: "none",
    // padding: "2%",
    marginBottom: "5%",
    [theme.breakpoints.up("md")]: {
      width: "23%",
      marginBottom: "0%",
      marginRight: "2%",
      paddingBottom: "2%",
      marginTop: "1%",
      height: "auto",
      float: "left",
    },
  },
  container: {
    width: "100%",
    marginTop: "1%",
    height: "auto",
    [theme.breakpoints.up("md")]: {
      width: "80%",
      marginLeft: "8%",
      height: "auto",
    },
  },
  director: {
    width: "80%",
    marginLeft: "8%",
    boxShadow: "0 0 12px #9E9E9E",
    borderRadius: "5px",
    height: "auto",
    padding: "4%",
  },
  img: {
    [theme.breakpoints.up("md")]: {
      width: "23%",
      marginRight: "5%",
      height: "auto",
      float: "left",
    },
  },
  paragraph: {
    width: "70%",
  },
}));

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <h4 className={classes.heading}>Director</h4>
      <div className={classes.director}>
        <div className={classes.img} onClick={() => history.push("/deepak")}>
          <img src="./logo192.png" alt="director" />
        </div>
        <p className={classes.paragraph}>
          Hey there! I am currently working as a Research Scientist at Transmute
          AI and am involved in mentoring several students on cutting-edge AI
          projects. I am also working as an independent Ai consultant for Aramco
          Overseas Geophysical Centre in Delft, Netherlands, where my focus is
          on improving seismic data analysis using artificial intelligence.
        </p>
      </div>
      <div className={classes.container}>
        <h4 className={classes.heading}>Teams</h4>
        <div className={classes.images} onClick={() => history.push("/deepak")}>
          <img src="./logo192.png" alt="director" />
          <h5>Deepak k gupta</h5>
        </div>
        <div className={classes.images}>
          <img src="./logo192.png" alt="director" />
          <h5>Deepak k gupta</h5>
        </div>
        <div className={classes.images}>
          <img src="./logo192.png" alt="director" />
          <h5>Deepak k gupta</h5>
        </div>
        <div className={classes.images}>
          <img src="./logo192.png" alt="director" />
          <h5>Deepak k gupta</h5>
        </div>
      </div>
    </div>
  );
}
