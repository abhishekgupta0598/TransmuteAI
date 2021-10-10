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
    marginLeft: "28%",
    [theme.breakpoints.up("md")]: {
      width: "70%",
      marginLeft: "28%",
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
export default function Chetan() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.image}>
          <img
            src="../Chetan Pandey.jpg"
            alt="Chetan Pandey"
            height="180"
            width="180"
          />
          <h5 className={classes.heading}>
            <b>Chetan Pandey</b>
          </h5>
        </div>
        <h6 className={classes.heading0}>
          <b>Student Researcher, Transmute AI</b>
        </h6>
        <h6 className={classes.transmute}>
          <b>Transmute AI</b>
        </h6>
        <div className={classes.icons}>
          <a
            href="https://www.linkedin.com/in/chetan0/"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className={classes.iconsColor} />
          </a>
          <a
            href="chetan.19je0259@ece.iitism.ac.in"
            target="_blank"
            alt="email address"
            rel="noreferrer"
          >
            <EmailIcon className={classes.iconsColor} />
          </a>
          <a
            href="https://github.com/chetanpandey1266/"
            alt="git hub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className={classes.iconsColor} />
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
            <SchoolIcon className={classes.column} />
            B.Tech. in Electronics and Communication Engineering, 2019-2023
          </li>
          <li>Indian Institute of Technology, ISM Dhanbad, India</li>
        </ul>
      </div>
      <div className={classes.float}>
        <h5 className={classes.heading}>Biography</h5>
        <p className={classes.paragraph}>
          Hey there! I’m Chetan Pandey, an undergrad student at IIT(ISM)
          Dhanbad, pursuing B.Tech. in Electronics and Communication
          Engineering. My primary interest lies in Deep Learning and its
          application in Computer Vision. I love to participate in hackathons
          and programming contests. I also love to learn new tech skills like
          Web Development etc. I Watching tv series, animes and listening music
          are my favourite pasttimes.
        </p>
      </div>
    </div>
  );
}
