import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    width: "80%",
    marginLeft: "10%",
    fontFamily: "Serif",
    color: "#002147",
  },
  paragraph: {
    width: "80%",
    marginLeft: "10%",
    fontFamily: "Serif",
    fontSize: "20px",
  },
  student: {
    fontFamily: "Serif",
    color: "#002147",
    fontSize: "28px",
    marginLeft: "10%",
    marginBottom: "-25px",
  },
  paragraphs: {
    width: "80%",
    marginLeft: "10%",
    fontFamily: "Serif",
    fontSize: "18px",
  },
  students: {
    fontFamily: "Serif",
    color: "#002147",
    fontSize: "22px",
    marginLeft: "10%",
    marginBottom: "-15px",
  },
}));

export default function JoinUs() {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:800px)");

  return (
    <div className={classes.root}>
      {matches ? (
        <div>
          <div className={classes.heading}>
            <h3>Do you have what it takes to be a Transmuter?</h3>
          </div>
          <div className={classes.paragraph}>
            <p>
              We are constantly looking for passionate and self-driven students
              and researchers who would like to join us on cutting-edge
              projects. We would like to hear more about you through the form
              accessible at the button below.
            </p>
            <p>
              Please note that we work in our free time and can only handle very
              limited members in team. We are currently full, but please feel
              free to fill the form below. We will get back if a spot opens up
              in the team and we find you a right match.
            </p>
          </div>
          <p className={classes.student}>Students</p>
          <p className={classes.paragraph}>
            Use this google{" "}
            <a href="https://forms.gle/x2gQ1b8ZTU1EteQF6">form</a>
          </p>
          <p className={classes.student}>Mentors</p>
          <p className={classes.paragraph}>
            Use this google{" "}
            <a href="https://forms.gle/x2gQ1b8ZTU1EteQF6">form</a>
          </p>
        </div>
      ) : (
        <div>
          <div className={classes.heading}>
            <h4>Do you have what it takes to be a Transmuter?</h4>
          </div>
          <div className={classes.paragraph}>
            <p>
              We are constantly looking for passionate and self-driven students
              and researchers who would like to join us on cutting-edge
              projects. We would like to hear more about you through the form
              accessible at the button below.
            </p>
            <p>
              Please note that we work in our free time and can only handle very
              limited members in team. We are currently full, but please feel
              free to fill the form below. We will get back if a spot opens up
              in the team and we find you a right match.
            </p>
          </div>
          <p className={classes.students}>Students</p>
          <p className={classes.paragraphs}>
            Use this google{" "}
            <a href="https://forms.gle/x2gQ1b8ZTU1EteQF6">form</a>
          </p>
          <p className={classes.students}>Mentors</p>
          <p className={classes.paragraphs}>
            Use this google{" "}
            <a href="https://forms.gle/x2gQ1b8ZTU1EteQF6">form</a>
          </p>
        </div>
      )}
    </div>
  );
}
