import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  column: {
    fontFamily: "Sans-serif",
    color: "#1ca9c9",
    float: "none",
    [theme.breakpoints.up("sm")]: {
      float: "left",
      fontFamily: "Sans-serif",
      color: "#002147",
      paddingRight: "3%",
    },
  },
  root: {
    width: "100%",
    padding: "2%",
    [theme.breakpoints.up("md")]: {
      width: "85%",
      marginLeft: "7%",
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
    fontFamily: "Sans-serif",
    color: "#1ca9c9",
    fontSize: "30px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "42px",
      fontFamily: "Sans-serif",
      color: "#002147",
    },
  },
  abstract: {
    fontFamily: "Sans-serif",
    color: "#1ca9c9",
    fontSize: "28px",
    clear: "left",
    paddingTop: "2%",
    [theme.breakpoints.up("sm")]: {
      fontSize: "36px",
      fontFamily: "Sans-serif",
      color: "#002147",
      clear: "left",
    },
  },
  link: {
    color: "#002147",
  },
  width: {
    width: "100%",
    marginTop: "-12px",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      marginTop: "-12px",
    },
  },
  float: {
    float: "left",
  },
}));
export default function ChipNet() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <div>
        <h4 className={classes.heading}>
          ChipNet: Budget-Aware Pruning with Heaviside Continuous Approximations
        </h4>
        <div className={classes.width}>
          <h6 className={classes.float}>
            <a
              href=" "
              onClick={() => history.push("/TransmuteAI/publications/rishab")}
            >
              Rishabh Tiwari,
            </a>
          </h6>
          <h6 className={classes.float}>
            <a
              href=" "
              onClick={() => history.push("/TransmuteAI/publications/udbhav")}
            >
              Udbhav Bamba,
            </a>
          </h6>
          <h6 className={classes.float}>
            <a
              href=" "
              onClick={() => history.push("/TransmuteAI/publications/arnav")}
            >
              Arnav Chavan,
            </a>
          </h6>
          <h6 className={classes.float}>
            <a
              href=" "
              onClick={() => history.push("/TransmuteAI/publications/deepak")}
            >
              Deepak K. Gupta
            </a>
          </h6>
        </div>
        <div>
          <h5 className={classes.abstract}>Abstract</h5>
          <p className={classes.paragraph}>
            Structured pruning methods are among the effective strategies for
            extracting small resource-efficient convolutional neural networks
            from their dense counterparts with minimal loss in accuracy.
            However, most existing methods still suffer from one or more
            limitations, that include 1) the need for training the dense model
            from scratch with pruning-related parameters embedded in the
            architecture, 2) requiring model-specific hyperparameter settings,
            3) inability to include budget-related constraint in the training
            process, and 4) instability under scenarios of extreme pruning. In
            this paper, we present ChipNet, a deterministic pruning strategy
            that employs continuous Heaviside function and a novel crispness
            loss to identify a highly sparse network out of an existing dense
            network. Our choice of continuous Heaviside function is inspired by
            the field of design optimization, where the material distribution
            task is posed as a continuous optimization problem, but only
            discrete values (0 or 1) are practically feasible and expected as
            final outcomes. Our approach’s flexible design facilitates its use
            with different choices of budget constraints while maintaining
            stability for very low target budgets. Experimental results show
            that ChipNet outperforms state-of-the-art structured pruning methods
            by remarkable margins of up to 16.1% in terms of accuracy. Further,
            we show that the masks obtained with ChipNet are transferable across
            datasets. For certain cases, it was observed that masks transferred
            from a model trained on feature-rich teacher dataset provide better
            performance on the student dataset than those obtained by directly
            pruning on the student data itself.
          </p>
        </div>
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
  );
}
