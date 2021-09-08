import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import SchoolIcon from "@material-ui/icons/School";

const useStyles = makeStyles((theme) => ({
  column: {
    float: "left",
    [theme.breakpoints.up("md")]: {
      float: "left",
    },
  },
  float: {
    float: "none",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      float: "left",
      width: "55%",
    },
  },
  root: {
    width: "100%",
    //   boxShadow : '0 0 6px #9E9E9E'
  },
  heading: {
    padding: "1%",
    [theme.breakpoints.up("md")]: {
      fontFamily: "Sans-Serif",
      color: "#002147",
      padding: "0%",
    },
  },
  heading0: {
    padding: "1%",
    marginLeft: "9%",
    [theme.breakpoints.up("md")]: {
      fontFamily: "Sans-Serif",
      marginLeft: "0%",
      color: "#002147",
      padding: "0%",
    },
  },
  paragraph: {
    fontFamily: "Sans-serif",
    width: "100%",
    padding: "1%",
    fontSize: "16px",
    [theme.breakpoints.up("md")]: {
      fontFamily: "Sans-serif",
      width: "100%",
      fontSize: "18px",
      padding: "0%",
    },
  },
  left: {
    float: "none",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      float: "left",
      width: "30%",
      marginLeft: "10%",
      paddingBottom: "18%",
      paddingTop: "2%",
    },
    // boxShadow : '0 0 6px #9E9E9E'
  },
  div: {
    float: "none",
    [theme.breakpoints.up("md")]: {
      float: "left",
      width: "25%",
    },
  },
  transmute: {
    width: "100%",
    color: "#002147",
    marginLeft: "32%",
    [theme.breakpoints.up("md")]: {
      width: "70%",
      marginLeft: "25%",
      color: "#002147",
    },
  },
  icons: {
    width: "100%",
    marginLeft: "25%",
    [theme.breakpoints.up("md")]: {
      width: "70%",
      marginLeft: "18%",
      marginTop: "5%",
    },
  },
  image: {
    width: "100%",
    marginLeft: "25%",
    [theme.breakpoints.up("md")]: {
      width: "70%",
      marginLeft: "18%",
    },
  },
  iconsColor: {
    color: "#002147",
    fontSize: "50px",
    padding: "1%",
  },
}));
export default function Arnav() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.image}>
          <img src="./logo192.png" alt="Deepak k. gupta" />
          <h5 className={classes.heading}>
            <b>Udbhav Bamba</b>
          </h5>
        </div>
        <h6 className={classes.heading0}>
          <b>Student Researcher & Founding Member,</b>
        </h6>
        <h6 className={classes.heading0}>
          <b>Kaggle Competition Master</b>
        </h6>
        <div className={classes.icons}>
          <a
            href="https://www.linkedin.com/in/bart-van-erp/"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon fontSize="large" className={classes.iconsColor} />
          </a>
          <a
            href="ubamba98@gmail.com"
            target="_blank"
            alt="email address"
            rel="noreferrer"
          >
            <EmailIcon fontSize="large" className={classes.iconsColor} />
          </a>
          <a
            href="https://github.com/bartvanerp/"
            alt="git hub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon fontSize="large" className={classes.iconsColor} />
          </a>
        </div>
      </div>
      <div className={classes.div}>
        <h5 className={classes.heading}>
          <b>Interests</b>
        </h5>
        <ol className={classes.paragraph}>
          <li>Deep Learning</li>
          <li>Computer Vision</li>
          <li>Efficient architecture search</li>
        </ol>
      </div>
      <div className={classes.div}>
        <h5 className={classes.heading}>
          <b>Education</b>
        </h5>
        <ul className={classes.paragraph}>
          <li>
            <SchoolIcon className={classes.column} />
            Integrated Master of Technology in Mathematics and Computing,
            2018-2023
          </li>
          <li>TU Delft, The Netherlands</li>
          <li>
            <SchoolIcon className={classes.column} />
            Indian Institute of Technology (ISM), Dhanbad
          </li>
        </ul>
      </div>
      <div className={classes.float}>
        <h5 className={classes.heading}>
          <b>Biography</b>
        </h5>
        <p className={classes.paragraph}>
          Hey there! I’m Udbhav Bamba, an understudy at IIT(ISM) Dhanbad,
          pursuing Integrated M. Tech in Mathematics and Computing. My interest
          lies in understanding and developing deep learning systems. In the
          course of recent years, I’ve worked on diverse projects, from research
          endeavours to interning as an applied scientist at Amazon, India. I
          frequently take part in machine learning and sports programming
          competitions on Kaggle, codeforces, and so forth to explore recent
          developments and fuel knowledge exploration. When I’m not
          brainstorming ideas or furiously coding, I enjoy gaming, watching
          movies and geeking about them
        </p>
      </div>
    </div>
  );
}
