import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "3%",
    [theme.breakpoints.up("md")]: {
      width: "78%",
      marginLeft: "10%",
    },
  },
  heading: {
    fontFamily: "sans-serif",
    width: "40%",
    fontSize: "38px",
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
    paddingBottom: "3%",
    float: "none",
    marginBottom: "5%",
    boxShadow: "0 0 12px #9E9E9E",
    borderRadius: "5px",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      width: "24%",
      marginBottom: "0%",
      boxShadow: "0 0 12px #9E9E9E",
      borderRadius: "5px",
      marginRight: "1%",
      paddingLeft: "1%",
      paddingRight: "1%",
      paddingTop: "1%",
      paddingBottom: "0%",
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
      width: "100%",
      height: "auto",
    },
  },
  director: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.up("md")]: {
      width: "100%",
      // marginLeft: "8%",
      boxShadow: "0 0 12px #9E9E9E",
      borderRadius: "5px",
      height: "280px",
      padding: "1%",
    },
  },
  img: {
    width: "100%",
    boxShadow: "0 0 12px #9E9E9E",
    borderRadius: "5px",
    cursor: "pointer",
    [theme.breakpoints.up("md")]: {
      width: "25%",
      // padding: "1%",
      marginRight: "7%",
      height: "250px",
      boxShadow: "0 0 12px #9E9E9E",
      float: "left",
    },
  },
  paragraph: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <h4 className={classes.heading}>Director</h4>
      <div className={classes.director}>
        <div
          className={classes.img}
          onClick={() => history.push("/TransmuteAI/publications/deepak")}
        >
          <img
            src="./Deepak_Gupta.jpeg"
            alt="director"
            height="250"
            width="240"
          />
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
        <div
          className={classes.images}
          onClick={() => history.push("/TransmuteAI/publications/arnav")}
        >
          <img src="./logo192.png" alt="director" />
          <h5>Arnav Chavan</h5>
        </div>

        <div
          className={classes.images}
          onClick={() => history.push("/TransmuteAI/publications/udbhav")}
        >
          <img
            src="./Udbhav Bamba.jpg"
            alt="director"
            height="192"
            width="210"
          />
          <h5>Udbhav Bamba</h5>
        </div>

        <div
          className={classes.images}
          onClick={() => history.push("/TransmuteAI/publications/rishab")}
        >
          <img
            src="./Rishabh_Tiwari.jpeg"
            alt="director"
            height="192"
            width="210"
          />
          <h5>Rishab Tiwari</h5>
        </div>

        <div
          className={classes.images}
          onClick={() => history.push("/TransmuteAI/publications/bryan")}
        >
          <img src="./logo192.png" alt="director" />
          <h5>Bryan Cardenas</h5>
        </div>

        <div
          className={classes.images}
          onClick={() => history.push("/TransmuteAI/publications/deepanshu")}
        >
          <img
            src="./Devanshu_Arya.jpeg"
            alt="director"
            height="192"
            width="210"
          />
          <h5>Devanshu Arya</h5>
        </div>

        <div
          className={classes.images}
          onClick={() => history.push("/TransmuteAI/members/chetan")}
        >
          <img
            src="./Chetan Pandey.jpg"
            alt="director"
            height="192"
            width="210"
          />
          <h5>Chetan Pandey</h5>
        </div>

        <div
          className={classes.images}
          onClick={() => history.push("/TransmuteAI/members/samee")}
        >
          <img
            src="./Samee Ur Rehman.jpeg"
            alt="director"
            height="192"
            width="210"
          />
          <h5>Samee Ur Rahman</h5>
        </div>

        <div
          className={classes.images}
          onClick={() => history.push("/TransmuteAI/members/saksham")}
        >
          <img src="./logo192.png" alt="director" height="192" width="210" />
          <h5>Saksham Aggarwal</h5>
        </div>

        <div
          className={classes.images}
          onClick={() => history.push("/TransmuteAI/members/silvia")}
        >
          <img
            src="./Silvia Sultana.jpg"
            alt="director"
            height="192"
            width="210"
          />
          <h5>Silvia Sultana</h5>
        </div>

        <div
          className={classes.images}
          onClick={() => history.push("/TransmuteAI/members/taresh")}
        >
          <img
            src="./Taresh Rajput.jpg"
            alt="director"
            height="192"
            width="210"
          />
          <h5>Taresh Rajput</h5>
        </div>
      </div>
    </div>
  );
}
