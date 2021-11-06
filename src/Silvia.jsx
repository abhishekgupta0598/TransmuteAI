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
export default function Silvia() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.image}>
          <img
            src="../Silvia Sultana.jpg"
            alt="Deepak k. gupta"
            height="180"
            width="180"
          />
          <h5 className={classes.heading}>
            <b>Silvia Sultana</b>
          </h5>
        </div>
        <h6 className={classes.heading0}>
          <b>Student Researcher, Incoming Student</b>
        </h6>
        <h6 className={classes.transmute}>
          <b>@TU Eindhoven</b>
        </h6>
        <div className={classes.icons}>
          <a
            href="https://www.linkedin.com/in/silvia-sultana-017256198/"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className={classes.iconsColor} />
          </a>
          <a
            href="https://www.gmail.com/"
            target="_blank"
            alt="email address"
            rel="noreferrer"
          >
            <EmailIcon className={classes.iconsColor} />
          </a>
          <a
            href="https://github.com/Silvia29"
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
          <li>Data Analysis</li>
          <li>Computer Vision</li>
          <li>Machine Learning for Predictive Analysis</li>
        </ol>
      </div>
      <div className={classes.div}>
        <h5 className={classes.heading}>Education</h5>
        <ul className={classes.paragraph}>
          <li>
            <SchoolIcon className={classes.column} />
            B.Tech in Information Technology, 2016-2020 Government College of
            Engineering and Ceramic Technology
          </li>
        </ul>
      </div>
      <div className={classes.float}>
        <h5 className={classes.heading}>Biography</h5>
        <p className={classes.paragraph}>
          Hello! I am Silvia Sultana. Based on my interests in Deep Learning and
          Data Science,I decided to pursue Masters after graduation in the hope
          of gathering more knowledge - both theoretical and practical. I will
          be joining TU Eindhoven for their Masters program in “Data Science in
          Engineering”(2021-23) along with the ALSP-HS Scholarship provided by
          the university. Thoughout my undergraduate,I have worked on diverse
          projects both under research universities and startups. Originally I
          was keenly interested in the science of predictive analysis and
          statistical modelling,however,it was with interning at IIT Patna in
          their AI-NLP-ML Lab that I started studying about Deep Learning.Even
          though I took part in several Hackathons during my undergraduate
          years,Kaggle is my recent new found playground(Better Late than
          Never!). When not studying,I like to read fiction books and write for
          online media networks.
        </p>
      </div>
    </div>
  );
}
