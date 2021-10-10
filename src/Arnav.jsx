import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import SchoolIcon from "@material-ui/icons/School";

const useStyles = makeStyles((theme) => ({
  float: {
    float: "none",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      float: "left",
      width: "65%",
    },
  },
  root: {
    width: "100%",
    padding: "2%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
      padding: "2%",
    },
  },
  heading: {
    fontFamily: "Sans-Serif",
    color: "#002147",
    [theme.breakpoints.up("md")]: {
      fontFamily: "Sans-Serif",
      color: "#002147",
      padding: "0%",
    },
  },
  heading0: {
    fontFamily: "Sans-Serif",
    color: "#002147",
    paddingLeft: "8%",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      fontFamily: "Sans-Serif",
      paddingLeft: "0%",
      color: "#002147",
      // boxShadow: "0 0 6px #9E9E9E",
    },
  },
  paragraph: {
    fontFamily: "Sans-serif",
    width: "100%",
    fontSize: "16px",
    [theme.breakpoints.up("md")]: {
      fontFamily: "Sans-serif",
      width: "100%",
      fontSize: "18px",
    },
  },
  left: {
    float: "none",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      float: "left",
      width: "35%",
      padding: "3%",
      paddingBottom: "18%",
    },
  },
  div: {
    float: "none",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      float: "left",
      width: "30%",
    },
  },
  transmute: {
    width: "100%",
    color: "#002147",
    marginLeft: "17%",
    [theme.breakpoints.up("md")]: {
      width: "70%",
      marginLeft: "17%",
      color: "#002147",
    },
  },
  icons: {
    width: "100%",
    marginLeft: "20%",
    [theme.breakpoints.up("md")]: {
      width: "70%",
      marginLeft: "20%",
      marginTop: "5%",
    },
  },
  image: {
    width: "100%",
    paddingLeft: "22%",
    [theme.breakpoints.up("md")]: {
      width: "100%",
      paddingLeft: "19%",
      paddingTop: "5%",
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
          <img src="./logo192.png" alt="arnav" />
          <h5 className={classes.heading}>
            <b>Arnav Chavan</b>
          </h5>
        </div>
        <h6 className={classes.heading0}>
          <b>Student Researcher & Founding Member,</b>
        </h6>
        <h6 className={classes.transmute}>
          <b>Kaggle Competition Master</b>
        </h6>
        <div className={classes.icons}>
          <a
            href="https://www.linkedin.com/in/arnav0400/"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className={classes.iconsColor} fontSize="large" />
          </a>
          <a
            href="arnavchavan04@gmail.com"
            target="_blank"
            alt="email address"
            rel="noreferrer"
          >
            <EmailIcon className={classes.iconsColor} fontSize="large" />
          </a>
          <a
            href="https://github.com/Arnav0400/"
            alt="git hub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className={classes.iconsColor} fontSize="large" />
          </a>
        </div>
      </div>
      <div className={classes.div}>
        <h5 className={classes.heading}>Interests</h5>
        <ol className={classes.paragraph}>
          <li>Deep Learning</li>
          <li>Computer Vision</li>
          <li>Efficient architecture search</li>
        </ol>
      </div>
      <div className={classes.div}>
        <h5 className={classes.heading}>Education</h5>
        <ul className={classes.paragraph}>
          <li>
            <SchoolIcon style={{ float: "left", width: "10%" }} />
            Integrated Master of Technology in Mathematics and Computing,
            2018-2023
          </li>
          <li>TU Delft, The Netherlands</li>
          <li>
            <SchoolIcon style={{ float: "left", width: "10%" }} />
            Indian Institute of Technology (ISM), Dhanbad
          </li>
        </ul>
      </div>
      <div className={classes.float}>
        <h5 className={classes.heading}>Biography</h5>
        <p className={classes.paragraph}>
          I am an Integrated Masters Student in Mathematics And Computing at
          Indian Institute Of Technology IIT-ISM, Dhanbad, India. My primary
          research interest is in the field of Deep Learning and Computer
          Vision. I have worked on a variety of segmentation tasks invloving
          medical and industrial data in the past. Also, I have done some work
          in efficient network designing strategies through neural architecture
          pruning and neural architecture designing and pushed the SOTA
          performance for the same. I used to work on the intersection of
          medical imaging tasks involving X-rays and CT-scans, and deep
          learning.In my free time, I love to take part in kaggle competitons
          and explore the rapid development of deep learning in other fields.
          Recently, I became a Kaggle Competitions Master. When I’m not involved
          in any coding related stuff, I love to play games and browse through
          development in other tech-fields
        </p>
      </div>
    </div>
  );
}
