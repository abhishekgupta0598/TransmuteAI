import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "2%",
    height: "auto",
    [theme.breakpoints.up("md")]: {
      width: "100%",
      padding: "0%",
    },
  },
  column: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "90%",
      marginLeft: "5%",
      marginRight: "5%",
      paddingTop: "6%",
    },
  },
  float: {
    float: "none",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      float: "left",
      width: "28%",
      marginLeft: "3%",
    },
  },
  paragraph: {
    fontFamily: "Sans-serif",
    fontSize: "18px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "90%",
      marginLeft: "5%",
      marginRight: "5%",
      height: "auto",
      fontFamily: "Sans-serif",
      fontSize: "22px",
    },
  },
  heading: {
    fontFamily: "Sans-serif",
    color: "#1ca9c9",
    width: "100%",
    fontSize: "30px",
    [theme.breakpoints.up("md")]: {
      fontFamily: "Sans-serif",
      color: "#002147",
      width: "40%",
      fontSize: "42px",
      marginLeft: "35%",
    },
  },
  boxheading: {
    fontFamily: "Sans-serif",
    color: "#1ca9c9",
    [theme.breakpoints.up("md")]: {
      fontFamily: "Sans-serif",
      color: "#002147",
    },
  },
  boxparagraph: {
    fontFamily: "Sans-serif",
    fontSize: "15px",
    [theme.breakpoints.up("md")]: {
      fontFamily: "Sans-serif",
      fontSize: "17px",
    },
  },
  video: {
    position: "fixed",
    minWidth: "100%",
    minHeight: "100%",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <video autoPlay muted loop>
        <source src="../video.mp4" type="video/mp4" className={classes.video} />
        video is not supperted!
      </video> */}
      {/* <img src="../Deepak_Gupta.jpeg" className={classes.video} alt="udbhav" /> */}
      <h3 className={classes.heading}>
        <b>Transmute AI Lab</b>
      </h3>
      <p className={classes.paragraph}>
        A network of self-driven researchers passionate about experiencing new
        reality with Artificial Intelligence (AI). We envision breakthroughs in
        AI and are thriving to build cutting-edge AI technologies that will
        revolutionize the world.
      </p>
      <div className={classes.column}>
        <div className={classes.float}>
          <h5 className={classes.boxheading}>
            <b>Who are we?</b>
          </h5>
          <p className={classes.boxparagraph}>
            We are a group of experienced researchers and young students who are
            passionate about contributing towards AI research. We enjoy working
            on AI research problems, and we do it for fun. We are a virtual
            research lab with members spread across the globe, but we know how
            to connect and collaborate. Stay tuned for more updates.
          </p>
        </div>
        <div className={classes.float}>
          <h5 className={classes.boxheading}>
            <b>What do we do?</b>
          </h5>
          <p className={classes.boxparagraph}>
            Our experienced researchers come up with great AI ideas. They mentor
            the young students and get them onboard with the required background
            knowledge of the problems. While the students actively work on the
            project, they receive close mentorship. Together, we come up with an
            awesome solution to the problem and present it to the scientific
            community.
          </p>
        </div>
        <div className={classes.float}>
          <h5 className={classes.boxheading}>
            <b>Why do we do it?</b>
          </h5>
          <p className={classes.boxparagraph}>
            We do it because we enjoy working together. It helps the young
            students with the exposure and experience needed for the top higher
            education universities in AI as well as the competitive job market.
            Our senior researchers enjoy the mentorship and engagement of the
            students. Together, all of us enjoy seeing our work making a
            difference in the AI community.
          </p>
        </div>
      </div>
    </div>
  );
}
