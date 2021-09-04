import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "2%",
    height: "auto",
  },
  column: {
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    paddingTop: "5%",
  },
  float: {
    float: "left",
    width: "31%",
    marginLeft: "1%",
  },
  paragraph: {
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    height: "auto",
    fontFamily: "Sans-serif",
    fontSize: "22px",
  },
  heading: {
    fontFamily: "Serif",
    color: "#1ca9c9",
    width: "40%",
    marginLeft: "35%",
  },
  boxheading: {
    fontFamily: "Serif",
    color: "#002147",
  },
  boxparagraph: {
    fontFamily: "Sans-serif",
    color: "#002147",
  },
  mediaParagraph: {
    width: "84%",
    marginLeft: "6%",
    marginRight: "6%",
    height: "auto",
    fontFamily: "Sans-serif",
    fontSize: "18px",
    // padding: "1%",
  },
  mediaHeading: {
    fontFamily: "Serif",
    color: "#1ca9c9",
    width: "80%",
    marginLeft: "6%",
    marginRight: "6%",
    // fontSize: "16px",
  },
}));

export default function Home() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:800px)");

  return (
    <div>
      {matches ? (
        <div className={classes.root}>
          <h3 className={classes.heading}>Transmute AI Lab</h3>
          <p className={classes.paragraph}>
            A network of self-driven researchers passionate about experiencing
            new reality with Artificial Intelligence (AI). We envision
            breakthroughs in AI and are thriving to build cutting-edge AI
            technologies that will revolutionize the world.
          </p>
          <div className={classes.column}>
            <div className={classes.float}>
              <h5 className={classes.boxheading}>Who are we?</h5>
              <p className={classes.boxparagraph}>
                We are a group of experienced researchers and young students who
                are passionate about contributing towards AI research. We enjoy
                working on AI research problems, and we do it for fun. We are a
                virtual research lab with members spread across the globe, but
                we know how to connect and collaborate. Stay tuned for more
                updates.
              </p>
            </div>
            <div className={classes.float}>
              <h5 className={classes.boxheading}>What do we do?</h5>
              <p className={classes.boxparagraph}>
                Our experienced researchers come up with great AI ideas. They
                mentor the young students and get them onboard with the required
                background knowledge of the problems. While the students
                actively work on the project, they receive close mentorship.
                Together, we come up with an awesome solution to the problem and
                present it to the scientific community.
              </p>
            </div>
            <div className={classes.float}>
              <h5 className={classes.boxheading}>Why do we do it?</h5>
              <p className={classes.boxparagraph}>
                We do it because we enjoy working together. It helps the young
                students with the exposure and experience needed for the top
                higher education universities in AI as well as the competitive
                job market. Our senior researchers enjoy the mentorship and
                engagement of the students. Together, all of us enjoy seeing our
                work making a difference in the AI community.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.root}>
          <h3 className={classes.mediaHeading}>Transmute AI Lab</h3>
          <p className={classes.mediaParagraph}>
            A network of self-driven researchers passionate about experiencing
            new reality with Artificial Intelligence (AI). We envision
            breakthroughs in AI and are thriving to build cutting-edge AI
            technologies that will revolutionize the world.
          </p>
          <div>
            <h4 className={classes.mediaHeading}>Who are we?</h4>
            <p className={classes.mediaParagraph}>
              We are a group of experienced researchers and young students who
              are passionate about contributing towards AI research. We enjoy
              working on AI research problems, and we do it for fun. We are a
              virtual research lab with members spread across the globe, but we
              know how to connect and collaborate. Stay tuned for more updates.
            </p>
          </div>
          <div>
            <h4 className={classes.mediaHeading}>What do we do?</h4>
            <p className={classes.mediaParagraph}>
              Our experienced researchers come up with great AI ideas. They
              mentor the young students and get them onboard with the required
              background knowledge of the problems. While the students actively
              work on the project, they receive close mentorship. Together, we
              come up with an awesome solution to the problem and present it to
              the scientific community.
            </p>
          </div>
          <div>
            <h4 className={classes.mediaHeading}>Why do we do it?</h4>
            <p className={classes.mediaParagraph}>
              We do it because we enjoy working together. It helps the young
              students with the exposure and experience needed for the top
              higher education universities in AI as well as the competitive job
              market. Our senior researchers enjoy the mentorship and engagement
              of the students. Together, all of us enjoy seeing our work making
              a difference in the AI community.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
