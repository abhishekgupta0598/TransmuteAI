import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "2%",
    [theme.breakpoints.up("sm")]: {
      width: "85%",
      padding: "2%",
      marginLeft: "7%",
    },
  },
  heading: {
    fontFamily: "Serif",
    color: "#1ca9c9",
    fontSize: "30px",
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Serif",
      color: "#002147",
      fontSize: "42px",
    },
  },
  paragraph: {
    fontFamily: "Serif",
    fontSize: "20px",
  },
  student: {
    fontFamily: "Serif",
    color: "#1ca9c9",
    fontSize: "24px",
    marginBottom: "-25px",
    [theme.breakpoints.up("sm")]: {
      fontFamily: "Serif",
      color: "#002147",
      fontSize: "28px",
      marginBottom: "-25px",
    },
  },
}));

export default function JoinUs() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h5 className={classes.heading}>
          <b>Do you have what it takes to be a Transmuter?</b>
        </h5>
      </div>
      <div>
        <p className={classes.paragraph}>
          We are constantly looking for passionate and self-driven students and
          researchers who would like to join us on cutting-edge projects. We
          would like to hear more about you through the form accessible at the
          button below.
        </p>
        <p className={classes.paragraph}>
          Please note that we work in our free time and can only handle very
          limited members in team. We are currently full, but please feel free
          to fill the form below. We will get back if a spot opens up in the
          team and we find you a right match.
        </p>
      </div>
      <p className={classes.student}>Students</p>
      <p className={classes.paragraph}>
        Use this google <a href="https://forms.gle/x2gQ1b8ZTU1EteQF6">form</a>
      </p>
      <p className={classes.student}>Mentors</p>
      <p className={classes.paragraph}>
        Use this google <a href="https://forms.gle/x2gQ1b8ZTU1EteQF6">form</a>
      </p>
    </div>
  );
}
