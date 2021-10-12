import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
// import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "GeneratingImg2",
    imgPath: "./GeneratingImg2.png",
  },
  {
    label: "GeneratingImg4",
    imgPath: "./GeneratingImg4.png",
  },
  {
    label: "GeneratingImg3",
    imgPath: "./GeneratingImg3.png",
  },
];

const images1 = [
  {
    label: "RescalingImg1",
    imgPath: "./RescalingImg1.png",
  },
  {
    label: "RescalingImg2",
    imgPath: "./RescalingImg2.png",
  },
  {
    label: "RescalingImg3",
    imgPath: "./RescalingImg3.png",
  },
];

const images2 = [
  {
    label: "CHIPNET_2",
    imgPath: "./CHIPNET_2.png",
  },
  {
    label: "CHIPNET_3",
    imgPath: "./CHIPNET_3.png",
  },
  {
    label: "CHIPNET_3",
    imgPath: "./CHIPNET_3.png",
  },
];

export default function Publications() {
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <div className={classes.root}>
      <h5 className={classes.header}>PUBLICATIONS</h5>
      <div className={classes.float}>
        <div>
          <Box
            sx={{ maxWidth: 400, flexGrow: 1 }}
            className={classes.imageMargin}
          >
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 0,
                pl: 2,
                bgcolor: "background.default",
              }}
            >
              {/* <Typography>{images[activeStep].label}</Typography> */}
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images1.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 166,
                        display: "block",
                        maxWidth: 400,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            {/* <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            /> */}
          </Box>
        </div>
        <div>
          {/* <img src="./logo192.png" alt="Deepak k. gupta" /> */}
          <Box
            sx={{ maxWidth: 400, flexGrow: 1 }}
            className={classes.imageMargin}
          >
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 0,
                pl: 2,
                bgcolor: "background.default",
              }}
            >
              {/* <Typography>{images[activeStep].label}</Typography> */}
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 176,
                        display: "block",
                        maxWidth: 400,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            {/* <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            /> */}
          </Box>
        </div>
        <div>
          {/* <img src="./logo192.png" alt="Deepak k. gupta" /> */}
          <Box
            sx={{ maxWidth: 400, flexGrow: 1 }}
            className={classes.imageMargin}
          >
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                height: 0,
                pl: 2,
                bgcolor: "background.default",
              }}
            >
              {/* <Typography>{images[activeStep].label}</Typography> */}
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images2.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 176,
                        display: "block",
                        maxWidth: 400,
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            {/* <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            /> */}
          </Box>
        </div>
      </div>
      <div className={classes.left}>
        <div className={classes.margin}>
          <h5
            className={classes.heading}
            onClick={() => history.push("/TransmuteAI/publications/rescaling")}
          >
            Rescaling CNN through Learnable Repetition of Network Parameters
          </h5>
          <div className={classes.width}>
            <h6
              className={classes.none}
              onClick={() => history.push("/TransmuteAI/publications/arnav")}
            >
              Arnav Chavan,
            </h6>
            <h6
              className={classes.none}
              onClick={() => history.push("/TransmuteAI/publications/udbhav")}
            >
              Udbhav Bamba,
            </h6>
            <h6
              className={classes.none}
              onClick={() => history.push("/TransmuteAI/publications/rishab")}
            >
              Rishabh Tiwari,
            </h6>
            <h6
              className={classes.none}
              onClick={() => history.push("/TransmuteAI/publications/deepak")}
            >
              Deepak K. Gupta
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
          <h5
            onClick={() => history.push("/TransmuteAI/publications/generating")}
            className={classes.heading}
          >
            Generating Annotated High-Fidelity Images containing Multiple
            Coherent Objects
          </h5>
          <div className={classes.width}>
            <h6
              className={classes.none}
              onClick={() => history.push("/TransmuteAI/publications/bryan")}
            >
              Bryan Cardenas,
            </h6>
            <h6
              className={classes.none}
              onClick={() =>
                history.push("/TransmuteAI/publications/deepanshu")
              }
            >
              devanshu Arya,
            </h6>
            <h6
              className={classes.none}
              onClick={() => history.push("/TransmuteAI/publications/deepak")}
            >
              Deepak Kumar Gupta.
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
            className={classes.heading}
          >
            ChipNet: Budget-Aware Pruning with Heaviside Continuous
            Approximations
          </h5>
          <div className={classes.width}>
            <h6
              className={classes.none}
              onClick={() => history.push("/TransmuteAI/publications/rishab")}
            >
              Rishabh Tiwari,
            </h6>
            <h6
              className={classes.none}
              onClick={() => history.push("/TransmuteAI/publications/udbhav")}
            >
              Udbhav Bamba,
            </h6>
            <h6
              className={classes.none}
              onClick={() => history.push("/TransmuteAI/publications/arnav")}
            >
              Arnav Chavan,
            </h6>
            <h6
              className={classes.none}
              onClick={() => history.push("/TransmuteAI/publications/deepak")}
            >
              Deepak K. Gupta
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
    color: "#1ca9c9",
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
    cursor: "pointer",
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
    marginTop: "-5px",
    fontSize: "16px",
    cursor: "pointer",
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
    fontSize: "12px",
    [theme.breakpoints.up("md")]: {
      fontSize: "18px",
    },
  },
  imageMargin: {
    marginTop: "4%",
  },
}));
