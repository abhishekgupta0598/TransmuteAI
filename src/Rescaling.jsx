import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  column: {
    float: "none",
    // padding: "1%",
    fontFamily: "Sans-serif",
    color: "#002147",
    [theme.breakpoints.up("sm")]: {
      float: "left",
      padding: "1%",
    },
  },
  root: {
    width: "96%",
    paddingTop: "1%",
    marginLeft: "2%",
    marginRight: "2%",
    [theme.breakpoints.up("md")]: {
      width: "76%",
      paddingTop: "1%",
      marginLeft: "12%",
      marginRight: "12%",
    },
  },
  paragraph: {
    fontFamily: "Sans-serif",
    fontSize: "16px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "18px",
    },
  },
  heading: {
    fontFamily: "Serif",
    color: "#002147",
  },
  link: {
    color: "#002147",
  },
  width: {
    width: "100%",
    marginBottom: "22%",
    [theme.breakpoints.up("sm")]: {
      width: "90%",
      marginBottom: "8%",
    },
  },
  widthup: {
    width: "100%",
    marginTop: "22%",
    [theme.breakpoints.up("sm")]: {
      width: "90%",
      marginTop: "8%",
    },
  },
  float: {
    float: "left",
  },
}));
export default function Rescaling() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <h3 className={classes.heading}>
        Rescaling CNN through Learnable Repetition of Network Parameters
      </h3>
      <div className={classes.width}>
        <h6 className={classes.float}>
          <a href=" " onClick={() => history.push("/rishab")}>
            Rishabh Tiwari ,
          </a>
        </h6>
        <h6 className={classes.float}>
          <a href=" " onClick={() => history.push("/udbhav")}>
            Udbhav Bamba ,
          </a>
        </h6>
        <h6 className={classes.float}>
          <a href=" " onClick={() => history.push("/arnav")}>
            Arnav Chavan ,
          </a>
        </h6>
        <h6 className={classes.float}>
          <a href=" " onClick={() => history.push("/deepak")}>
            Deepak K. Gupta
          </a>
        </h6>
      </div>
      <div className={classes.widthup}>
        <h5 className={classes.heading}>
          <b>Abstract</b>
        </h5>
        <p className={classes.paragraph}>
          Deeper and wider CNNs are known to provide improved performance for
          deep learning tasks. However, most such networks have poor performance
          gain per parameter increase. In this paper, we investigate whether the
          gain observed in deeper models is purely due to the addition of more
          optimization parameters or whether the physical size of the network as
          well plays a role. Further, we present a novel rescaling strategy for
          CNNs based on learnable repetition of its parameters. Based on this
          strategy, we rescale CNNs without changing their parameter count, and
          show that learnable sharing of weights itself can provide significant
          boost in the performance of any given model without changing its
          parameter count. We show that small base networks when rescaled, can
          provide performance comparable to deeper networks with as low as 6% of
          optimization parameters of the deeper one. The relevance of weight
          sharing is further highlighted through the example of
          group-equivariant CNNs. We show that the significant improvements
          obtained with group-equivariant CNNs over the regular CNNs on
          classification problems are only partly due to the added equivariance
          property, and part of it comes from the learnable repetition of
          network weights. For rot-MNIST dataset, we show that up to 40% of the
          relative gain reported by state-of-the-art methods for rotation
          equivariance could actually be due to just the learnt repetition of
          weights.
        </p>
      </div>
      <div>
        <div className={classes.column}>
          <h6>Publication</h6>
          <h6>International Conference on Image Processing</h6>
        </div>
        <div className={classes.column}>
          <h6>Date</h6>
          <h6>May, 2021</h6>
        </div>
        <div className={classes.column}>
          <h6>Link</h6>
          <ButtonGroup
            color="primary"
            size="small"
            aria-label="small outlined button group"
          >
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
    </div>
  );
}
