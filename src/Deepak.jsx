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
export default function Deepak() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.image}>
          <img src="./logo192.png" alt="Deepak k. gupta" />
          <h5 className={classes.heading}>
            <b>Deepak k. Gupta</b>
          </h5>
        </div>
        <h6 className={classes.heading0}>
          <b>Research Scientist and Founding Member,</b>
        </h6>
        <h6 className={classes.transmute}>
          <b>Transmute AI</b>
        </h6>
        <div className={classes.icons}>
          <a
            href="https://www.linkedin.com/in/deepak-gupta-05b48828/"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className={classes.iconsColor} />
          </a>
          <a
            href="guptadeepak2806@gmail.com"
            target="_blank"
            alt="email address"
            rel="noreferrer"
          >
            <EmailIcon className={classes.iconsColor} />
          </a>
          <a
            href="https://github.com/dkgupta90"
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
          <li>AI for Computational Science & Engineering</li>
          <li>AI for Medical Imaging</li>
        </ol>
      </div>
      <div className={classes.div}>
        <h5 className={classes.heading}>Education</h5>
        <ul className={classes.paragraph}>
          <li>
            <SchoolIcon className={classes.column} />
            PhD in Computational Science/Applied Mathematics, 2013-17
          </li>
          <li>TU Delft, The Netherlands</li>
          <li>
            <SchoolIcon className={classes.column} />
            BS and MS in Geophysics, 2008-13
          </li>
          <li>Indian Institute of Technology, ISM Dhanbad, India</li>
        </ul>
      </div>
      <div className={classes.float}>
        <h5 className={classes.heading}>Biography</h5>
        <p className={classes.paragraph}>
          Hey there! I am currently working as a Research Scientist at Transmute
          AI and am involved in mentoring several students on cutting-edge AI
          projects. I am also working as an independent Ai consultant for Aramco
          Overseas Geophysical Centre in Delft, Netherlands, where my focus is
          on improving seismic data analysis using artificial intelligence.
          Earlier, I worked as a postdoctoral researcher at QUVA Lab and
          Informatics Institute, at University of Amsterdam (Jan 2019 - Jan
          2021). My research focus lies in deep learning and computer vision,
          and I am particularly interested in developing efficient algorithms
          for object tracking and segmentation in videos. I am also involved in
          research projects at the intersection of physics, mathematics and
          machine learning focused towards applications in medical imaging and
          geophysics. If you would like to collaborate on exciting research
          problems from these domains, please drop me an email. Regarding
          internships or graduation projects with me, check these opportunities.
        </p>
      </div>
    </div>
  );
}
