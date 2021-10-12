import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    marginLeft: "15%",
    padding: "1%",
    [theme.breakpoints.up("md")]: {
      width: "80%",
      marginLeft: "10%",
    },
  },
  heading: {
    fontFamily: "sans-serif",
    width: "40%",
    fontSize: "38px",
    color: "#002147",
    clear: "left",
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
    height: "260px",
    [theme.breakpoints.up("md")]: {
      width: "30%",
      marginBottom: "1%",
      boxShadow: "0 0 12px #9E9E9E",
      marginRight: "2%",
      paddingLeft: "1%",
      paddingRight: "1%",
      paddingTop: "1%",
      paddingBottom: "0%",
      marginTop: "1%",
      height: "340px",
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
    height: "262px",
    [theme.breakpoints.up("md")]: {
      width: "94%",
      boxShadow: "0 0 12px #9E9E9E",
      height: "370px",
      padding: "1%",
    },
  },
  img: {
    width: "100%",
    boxShadow: "0 0 12px #9E9E9E",
    cursor: "pointer",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      width: "28%",
      marginRight: "7%",
      // height: "270px",
      height: "78%",
      boxShadow: "0 0 12px #9E9E9E",
      float: "left",
    },
  },
  paragraph: {
    width: "100%",
    display: "none",
    [theme.breakpoints.up("md")]: {
      width: "100%",
      display: "block",
    },
  },
  iconsColor: {
    color: "#002147",
    fontSize: "26px",
    float: "left",
    [theme.breakpoints.up("md")]: {
      color: "#002147",
      fontSize: "30px",
      float: "left",
    },
  },
  iconsForDirector: {
    color: "#002147",
    fontSize: "28px",
    float: "left",
    [theme.breakpoints.up("md")]: {
      color: "#002147",
      fontSize: "36px",
      float: "left",
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
            // height="270"
            // width="262"
            height="100%"
            width="100%"
          />
          <h6>Deepak k. Gupta</h6>
          <a
            href="https://www.linkedin.com/in/bart-van-erp/"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon
              fontSize="large"
              className={classes.iconsForDirector}
            />
          </a>
          <a
            href="ubamba98@gmail.com"
            target="_blank"
            alt="email address"
            rel="noreferrer"
          >
            <EmailIcon fontSize="large" className={classes.iconsForDirector} />
          </a>
          <a
            href="https://github.com/bartvanerp/"
            alt="git hub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="large" className={classes.iconsForDirector} />
          </a>
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
        <div className={classes.images}>
          <img
            src="./logo192.png"
            alt="director"
            height="76%"
            width="100%"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/TransmuteAI/publications/arnav")}
          />
          <h6>Arnav Chavan</h6>
          <a
            href="https://www.linkedin.com/in/bart-van-erp/"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="ubamba98@gmail.com"
            target="_blank"
            alt="email address"
            rel="noreferrer"
          >
            <EmailIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="https://github.com/bartvanerp/"
            alt="git hub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="small" className={classes.iconsColor} />
          </a>
        </div>
        <div className={classes.images}>
          <img
            src="./Udbhav Bamba.jpg"
            alt="director"
            height="76%"
            width="100%"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/TransmuteAI/publications/udbhav")}
          />
          <h6>Udbhav Bamba</h6>
          <a
            href="https://www.linkedin.com/in/bart-van-erp/"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="ubamba98@gmail.com"
            target="_blank"
            alt="email address"
            rel="noreferrer"
          >
            <EmailIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="https://github.com/bartvanerp/"
            alt="git hub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="small" className={classes.iconsColor} />
          </a>
        </div>
        <div className={classes.images}>
          <img
            src="./Rishabh_Tiwari.jpeg"
            alt="director"
            height="76%"
            width="100%"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/TransmuteAI/publications/rishab")}
          />
          <h6>Rishabh Tiwari</h6>
          <a
            href="https://www.linkedin.com/in/bart-van-erp/"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="ubamba98@gmail.com"
            target="_blank"
            alt="email address"
            rel="noreferrer"
          >
            <EmailIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="https://github.com/bartvanerp/"
            alt="git hub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="small" className={classes.iconsColor} />
          </a>
        </div>
        <div className={classes.images}>
          <img
            src="./logo192.png"
            alt="director"
            height="76%"
            width="100%"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/TransmuteAI/publications/bryan")}
          />
          <h6>Rishabh Tiwari</h6>
          <a
            href="https://www.linkedin.com/in/bart-van-erp/"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="ubamba98@gmail.com"
            target="_blank"
            alt="email address"
            rel="noreferrer"
          >
            <EmailIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="https://github.com/bartvanerp/"
            alt="git hub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="small" className={classes.iconsColor} />
          </a>
        </div>
        <div className={classes.images}>
          <img
            src="./Devanshu_Arya.jpeg"
            alt="director"
            height="76%"
            width="100%"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/TransmuteAI/publications/deepanshu")}
          />
          <h6>Devanshu Arya</h6>
          <a
            href="https://www.linkedin.com/in/bart-van-erp/"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="ubamba98@gmail.com"
            target="_blank"
            alt="email address"
            rel="noreferrer"
          >
            <EmailIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="https://github.com/bartvanerp/"
            alt="git hub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="small" className={classes.iconsColor} />
          </a>
        </div>
        <div className={classes.images}>
          <img
            src="./Chetan Pandey.jpg"
            alt="director"
            height="76%"
            width="100%"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/TransmuteAI/publications/chetan")}
          />
          <h6>Chetan Pandey</h6>
          <a
            href="https://www.linkedin.com/in/bart-van-erp/"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="ubamba98@gmail.com"
            target="_blank"
            alt="email address"
            rel="noreferrer"
          >
            <EmailIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="https://github.com/bartvanerp/"
            alt="git hub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="small" className={classes.iconsColor} />
          </a>
        </div>

        <div className={classes.images}>
          <img
            src="./Samee Ur Rehman.jpeg"
            alt="director"
            height="76%"
            width="100%"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/TransmuteAI/publications/samee")}
          />
          <h6>Samee Ur Rehman</h6>
          <a
            href="https://www.linkedin.com/in/bart-van-erp/"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="ubamba98@gmail.com"
            target="_blank"
            alt="email address"
            rel="noreferrer"
          >
            <EmailIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="https://github.com/bartvanerp/"
            alt="git hub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="small" className={classes.iconsColor} />
          </a>
        </div>

        <div className={classes.images}>
          <img
            src="./logo192.png"
            alt="director"
            height="76%"
            width="100%"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/TransmuteAI/publications/saksham")}
          />
          <h6>Saksham Aggarwal</h6>
          <a
            href="https://www.linkedin.com/in/bart-van-erp/"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="ubamba98@gmail.com"
            target="_blank"
            alt="email address"
            rel="noreferrer"
          >
            <EmailIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="https://github.com/bartvanerp/"
            alt="git hub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="small" className={classes.iconsColor} />
          </a>
        </div>
        <div className={classes.images}>
          <img
            src="./Silvia Sultana.jpg"
            alt="director"
            height="76%"
            width="100%"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/TransmuteAI/publications/silvia")}
          />
          <h6>Silvia Sultana</h6>
          <a
            href="https://www.linkedin.com/in/bart-van-erp/"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="ubamba98@gmail.com"
            target="_blank"
            alt="email address"
            rel="noreferrer"
          >
            <EmailIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="https://github.com/bartvanerp/"
            alt="git hub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="small" className={classes.iconsColor} />
          </a>
        </div>
        <div className={classes.images}>
          <img
            src="./Taresh Rajput.jpg"
            alt="director"
            height="76%"
            width="100%"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/TransmuteAI/publications/taresh")}
          />
          <h6>Taresh Rajput</h6>
          <a
            href="https://www.linkedin.com/in/bart-van-erp/"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="ubamba98@gmail.com"
            target="_blank"
            alt="email address"
            rel="noreferrer"
          >
            <EmailIcon fontSize="small" className={classes.iconsColor} />
          </a>
          <a
            href="https://github.com/bartvanerp/"
            alt="git hub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="small" className={classes.iconsColor} />
          </a>
        </div>
      </div>
    </div>
  );
}
