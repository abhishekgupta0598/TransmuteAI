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
export default function Samee() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.image}>
          <img
            src="../Samee Ur Rehman.jpeg"
            alt="Deepak k. gupta"
            height="180"
            width="180"
          />
          <h5 className={classes.heading}>
            <b>Samee Ur Rahman</b>
          </h5>
        </div>
        <h6 className={classes.heading0}>
          <b>AI Researcher & Member, Transmute AI</b>
        </h6>
        <h6 className={classes.transmute}>
          <b>Transmute AI</b>
        </h6>
        <div className={classes.icons}>
          <a
            href="https://www.linkedin.com"
            alt="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className={classes.iconsColor} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            alt="email address"
            rel="noreferrer"
          >
            <EmailIcon className={classes.iconsColor} />
          </a>
          <a
            href="https://www.linkedin.com"
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
          <li>Machine Learning</li>
          <li>Designing robust learning algorithm</li>
        </ol>
      </div>
      <div className={classes.div}>
        <h5 className={classes.heading}>Education</h5>
        <ul className={classes.paragraph}>
          <li>
            <SchoolIcon className={classes.column} />
            Phd in Robust Optimization for Computationally Expensive Systems,
            2011-2015
          </li>
          <li>Delft University of Technology, the Netherlands</li>
          <li>
            <SchoolIcon className={classes.column} />
            BSc and MSc in Electrical Engineering and Computer Science,
            2006-2011
          </li>
          <li>Jacobs University, Germany</li>
        </ul>
      </div>
      <div className={classes.float}>
        <h5 className={classes.heading}>Biography</h5>
        <p className={classes.paragraph}>
          Hi, my name is Samee ur Rehman. I have a background in Electrical
          Engineering and Computer Science with a focus on Applied Mathematics,
          Signal Processing, Machine/Deep Learning and Optimization. I completed
          my BSc and MSc from Jacobs University in Germany (2006-2011) in the
          area of Electrical Engineering and Computer Science and then did a PhD
          at Delft University of Technology, the Netherlands (2011-2015) on the
          subject of Robust Optimization for Computationally Expensive Systems.
          Since 2015, I have been working in industry as a Machine Learning
          Engineer and as a Data Scientist. Within AI, I am particularly
          interested in building robust learning algorithms, in biasing the
          learning process such that it focuses on causal features, in
          incentivizing models to learn to leverage the physics of the natural
          world and in the use of Bayes Rule, Probability(Model given Data) =
          Probability(Data given Model)Probability(Model)/P(Data), to build
          interpretable intelligent systems. In general, I love the creative
          process and I am someone who derives a lot of energy from starting
          something original and from working with people in multidisciplinary
          teams. My mission in life is to use our collective inventive and
          innovative skills in order to help create a nurturing and enabling
          environment for all of us so that we can build a better future
          together! I enjoy learning, reading, writing, painting and playing
          racket sports. You can learn more about me at sameeurrehman.com
        </p>
      </div>
    </div>
  );
}
