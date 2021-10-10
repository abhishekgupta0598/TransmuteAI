import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

export default function Publications() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <h5 className={classes.header}>PUBLICATIONS</h5>
      <div className={classes.float}>
        <div>
          <img src="./logo192.png" alt="Deepak k. gupta" />
        </div>
        <div>
          <img src="./logo192.png" alt="Deepak k. gupta" />
        </div>
        <div>
          <img src="./logo192.png" alt="Deepak k. gupta" />
        </div>
      </div>
      <div className={classes.left}>
        <div className={classes.margin}>
          <h5>
            <a
              className={classes.heading}
              href=" "
              onClick={() =>
                history.push("/TransmuteAI/publications/rescaling")
              }
            >
              Rescaling CNN through Learnable Repetition of Network Parameters
            </a>
          </h5>
          <div className={classes.width}>
            <h6 className={classes.none}>
              <a
                href=" "
                onClick={() => history.push("/TransmuteAI/publications/arnav")}
              >
                Arnav Chavan,
              </a>
            </h6>
            <h6 className={classes.none}>
              <a
                href=" "
                onClick={() => history.push("/TransmuteAI/publications/udbhav")}
              >
                Udbhav Bamba,
              </a>
            </h6>
            <h6 className={classes.none}>
              <a
                href=" "
                onClick={() => history.push("/TransmuteAI/publications/rishab")}
              >
                Rishabh Tiwari,
              </a>
            </h6>
            <h6 className={classes.none}>
              <a
                href=" "
                onClick={() => history.push("/TransmuteAI/publications/deepak")}
              >
                Deepak K. Gupta
              </a>
            </h6>
          </div>
          <div className={classes.inter}>
            <h6 className={classes.paragraph}>
              International Conference on Image Processing(ICIP)
            </h6>
            <h6 className={classes.paragraph}>May, 2021</h6>
          </div>
          <div>
            <ButtonGroup
              size="small"
              aria-label="small outlined button group"
              color="#002147"
            >
              <Button
                className={classes.link}
                onClick={() =>
                  history.push("/TransmuteAI/publications/rescaling")
                }
              >
                Details
              </Button>
              <Button>
                <a
                  href="https://arxiv.org/abs/2101.05650"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.link}
                >
                  PDF
                </a>
              </Button>
              <Button>
                <a
                  href="https://github.com/transmuteAI/RepeatNet/"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.link}
                >
                  Code
                </a>
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div className={classes.margin}>
          <h5>
            <a
              className={classes.heading}
              onClick={() =>
                history.push("/TransmuteAI/publications/generating")
              }
              href=" "
            >
              Generating Annotated High-Fidelity Images containing Multiple
              Coherent Objects
            </a>
          </h5>
          <div className={classes.width}>
            <h6 className={classes.none}>
              <a
                href=" "
                onClick={() => history.push("/TransmuteAI/publications/bryan")}
              >
                Bryan Cardenas,
              </a>
            </h6>
            <h6 className={classes.none}>
              <a
                href=" "
                onClick={() =>
                  history.push("/TransmuteAI/publications/deepanshu")
                }
              >
                devanshu Arya,
              </a>
            </h6>
            <h6 className={classes.none}>
              <a
                href=" "
                onClick={() => history.push("/TransmuteAI/publications/deepak")}
              >
                Deepak Kumar Gupta.
              </a>
            </h6>
          </div>
          <div className={classes.inter}>
            <h6 className={classes.paragraph}>
              International Conference on Image Processing(ICIP){" "}
            </h6>
            <h6 className={classes.paragraph}>May, 2021</h6>
          </div>
          <div>
            <ButtonGroup
              size="small"
              aria-label="small outlined button group"
              color="#002147"
            >
              <Button
                className={classes.link}
                onClick={() =>
                  history.push("/TransmuteAI/publications/generating")
                }
              >
                Details
              </Button>
              <Button>
                <a
                  href="https://arxiv.org/abs/2006.12150"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.link}
                >
                  PDF
                </a>
              </Button>
              <Button>
                <a
                  href="https://github.com/Cynetics/MSGNet/"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.link}
                >
                  Code
                </a>
              </Button>
            </ButtonGroup>
          </div>
        </div>
        <div>
          <h5
            onClick={() => history.push("/TransmuteAI/publications/chipnets")}
          >
            ChipNet: Budget-Aware Pruning with Heaviside Continuous
            Approximations
          </h5>
          <div className={classes.width}>
            <h6 className={classes.none}>
              <a
                href=" "
                onClick={() => history.push("/TransmuteAI/publications/rishab")}
              >
                Rishabh Tiwari,
              </a>
            </h6>
            <h6 className={classes.none}>
              <a
                href=" "
                onClick={() => history.push("/TransmuteAI/publications/udbhav")}
              >
                Udbhav Bamba,
              </a>
            </h6>
            <h6 className={classes.none}>
              <a
                href=" "
                onClick={() => history.push("/TransmuteAI/publications/arnav")}
              >
                Arnav Chavan,
              </a>
            </h6>
            <h6 className={classes.none}>
              <a
                href=" "
                onClick={() => history.push("/TransmuteAI/publications/deepak")}
              >
                Deepak K. Gupta
              </a>
            </h6>
          </div>
          <div className={classes.inter}>
            <h6 className={classes.paragraph}>
              International Conference on Image Processing(ICIP){" "}
            </h6>
            <h6 className={classes.paragraph}>May, 2021</h6>
          </div>
          <div>
            <ButtonGroup
              size="small"
              aria-label="small outlined button group"
              color="#002147"
            >
              <Button
                className={classes.link}
                onClick={() =>
                  history.push("/TransmuteAI/publications/chipnets")
                }
              >
                Details
              </Button>
              <Button>
                <a
                  href="https://openreview.net/forum?id=xCxXwTzx4L1"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.link}
                >
                  PDF
                </a>
              </Button>
              <Button>
                <a
                  href="https://github.com/transmuteAI/ChipNet"
                  target="_blank"
                  rel="noreferrer"
                  className={classes.link}
                >
                  Code
                </a>
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "1%",
  },
  margin: {
    paddingBottom: "3%",
  },
  header: {
    fontFamily: "Sans-serif",
    color: "#96ded1",
    fontSize: "32px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "48px",
      color: "#002147",
      // boxShadow: "0 0 6px #9E9E9E",
    },
  },
  float: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "block",
      width: "40%",
      float: "left",
      padding: "1%",
    },
  },
  left: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "60%",
      float: "left",
      paddingTop: "1%",
    },
  },
  heading: {
    fontFamily: "Sans-serif",
    color: "#0abab5",
    [theme.breakpoints.up("md")]: {
      fontFamily: "Sans-serif",
      color: "#002147",
    },
    // boxShadow: "0 0 6px #9E9E9E",
  },
  width: {
    width: "100%",
    // float: "none",
    paddingBottom: "1%",
  },
  none: {
    float: "left",
    marginTop: "-9px",
    fontSize: "14px",
    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
      marginTop: "-11px",
    },
  },
  inter: {
    width: "100%",
    clear: "left",
    // boxShadow: "0 0 6px #9E9E9E",
    [theme.breakpoints.up("md")]: {
      marginTop: "1%",
      clear: "left",
      width: "100%",
    },
  },
  button: {
    marginBottom: "1%",
  },
  link: {
    color: "black",
  },
  paragraph: {
    fontFamily: "Sans-serif",
    fontSize: "14px",
    [theme.breakpoints.up("md")]: {
      fontSize: "16px",
    },
  },
}));
