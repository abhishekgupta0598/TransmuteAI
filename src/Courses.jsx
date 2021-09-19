import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import Paper from "@material-ui/core/Paper";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import VideoLibraryRoundedIcon from "@material-ui/icons/VideoLibraryRounded";
import NoteAddRoundedIcon from "@material-ui/icons/NoteAddRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "2%",
    [theme.breakpoints.up("sm")]: {
      width: "80%",
      marginLeft: "10%",
      marginRight: "10%",
      padding: "0%",
    },
  },
  inside: {
    fontSize: "12px",
    color: "#1ca9c9",
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
      color: "#1ca9c9",
    },
  },
  label: {
    fontSize: "18px",
    // color: "#0abab5",
    [theme.breakpoints.up("sm")]: {
      fontSize: "24px",
      //   color: "#0abab5",
    },
  },
  label2: {
    fontSize: "14px",
    // color: "#0abab5",
    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
      //   color: "#0abab5",
    },
  },
  tree: {
    flexGrow: 1,
  },
  heading: {
    fontFamily: "Serif",
    color: "#002147",
    fontSize: "32px",
    [theme.breakpoints.up("sm")]: {
      fontSize: "48px",
      color: "#002147",
      marginLeft: "0%",
    },
  },
  icons: {
    color: "#002147",
    fontSize: "35px",
  },
  paper: {
    padding: "1%",
    marginTop: "1%",
  },
}));

export default function Courses() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.heading}>
        Pattern Recognition and Machine Learning
      </h3>
      <Paper elevation={3} className={classes.paper}>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem
            nodeId="1"
            label="Lecture 1: Introduction to ML-1 Course"
            classes={{ label: classes.label }}
          >
            <p>
              Our experienced researchers come up with great AI ideas. They
              mentor the young students and get them onboard with the required
              background knowledge of the problems. While the students actively
              work on the project, they receive close mentorship. Together, we
              come up with an awesome solution to the problem and present it to
              the scientific community.
            </p>
            <TreeItem
              nodeId="2"
              label="Lecture Recording"
              classes={{ label: classes.label2 }}
              icon={<VideoLibraryRoundedIcon />}
            >
              <a href="https://www.youtube.com/watch?v=tYqQGuTjW-U&t=4s">
                <TreeItem
                  nodeId="3"
                  label="Introduction to ML-1"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
              <a href="https://www.youtube.com/watch?v=O01oI1pgMQM">
                <TreeItem
                  nodeId="4"
                  label="Introduction to machine learning"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
            </TreeItem>
            <TreeItem
              nodeId="30"
              label="Documents"
              classes={{ label: classes.label2 }}
              icon={<NoteAddRoundedIcon />}
            >
              <a href="https://www.youtube.com/watch?v=tYqQGuTjW-U&t=4s">
                <TreeItem
                  nodeId="3"
                  label="Introduction to ML-1"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
            </TreeItem>
            <TreeItem
              nodeId="31"
              label="Quiz"
              classes={{ label: classes.label2 }}
              icon={<CreateRoundedIcon />}
            >
              <a href="https://www.youtube.com/watch?v=tYqQGuTjW-U&t=4s">
                <TreeItem
                  nodeId="3"
                  label="Introduction to ML-1"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
            </TreeItem>
          </TreeItem>
        </TreeView>
      </Paper>
      <Paper elevation={3} className={classes.paper}>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem
            nodeId="5"
            label="Lecture 2: Pattern Recognition"
            classes={{ label: classes.label }}
          >
            <p>
              Our experienced researchers come up with great AI ideas. They
              mentor the young students and get them onboard with the required
              background knowledge of the problems. While the students actively
              work on the project, they receive close mentorship. Together, we
              come up with an awesome solution to the problem and present it to
              the scientific community.
            </p>
            <TreeItem
              nodeId="6"
              label="Lecture Recording"
              classes={{ label: classes.label2 }}
              icon={<VideoLibraryRoundedIcon />}
            >
              <a href="https://www.youtube.com/watch?v=EU5FhNRO5c4&t=520s">
                <TreeItem
                  nodeId="7"
                  label="Pattern Recognition"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
              <a href="https://www.youtube.com/watch?v=tfqJ0iYOayM">
                <TreeItem
                  nodeId="8"
                  label="Artificial Intelligence in Medical Imaging"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
              <a href="https://www.youtube.com/watch?v=9B9MGLfkl28">
                <TreeItem
                  nodeId="9"
                  label="Probability Theory"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
            </TreeItem>
            <TreeItem
              nodeId="32"
              label="Documents"
              classes={{ label: classes.label2 }}
              icon={<NoteAddRoundedIcon />}
            >
              <a href="https://www.youtube.com/watch?v=tYqQGuTjW-U&t=4s">
                <TreeItem
                  nodeId="3"
                  label="Introduction to ML-1"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
            </TreeItem>
            <TreeItem
              nodeId="33"
              label="Quiz"
              classes={{ label: classes.label2 }}
              icon={<CreateRoundedIcon />}
            >
              <a href="https://www.youtube.com/watch?v=tYqQGuTjW-U&t=4s">
                <TreeItem
                  nodeId="3"
                  label="Introduction to ML-1"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
            </TreeItem>
          </TreeItem>
        </TreeView>
      </Paper>
      <Paper elevation={3} className={classes.paper}>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem
            nodeId="10"
            label="Lecture 3: Expectation Variance and Covariance"
            classes={{ label: classes.label }}
          >
            <p>
              Our experienced researchers come up with great AI ideas. They
              mentor the young students and get them onboard with the required
              background knowledge of the problems. While the students actively
              work on the project, they receive close mentorship. Together, we
              come up with an awesome solution to the problem and present it to
              the scientific community.
            </p>
            <TreeItem
              nodeId="11"
              label="Lecture Recording"
              classes={{ label: classes.label2 }}
              icon={<VideoLibraryRoundedIcon />}
            >
              <a href="https://www.youtube.com/watch?v=mguRO_Ubpsc">
                <TreeItem
                  nodeId="12"
                  label="Expectation Variance and Covariance"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
              <a href="https://www.youtube.com/watch?v=BJCTIqwqLhE&t=190s">
                <TreeItem
                  nodeId="13"
                  label="Gaussian Distribution"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
              <a href="https://www.youtube.com/watch?v=YYFDMHFK61k">
                <TreeItem
                  nodeId="14"
                  label="Graph Neural Network"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
              <a href="https://www.youtube.com/watch?v=mguRO_Ubpsc">
                <TreeItem
                  nodeId="15"
                  label="Maximum Likelihood Estimation"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
              <a href="https://www.youtube.com/watch?v=MWTBBVYidN4">
                <TreeItem
                  nodeId="16"
                  label="Maximum A posteriori Estimation"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
              <a href="https://www.youtube.com/watch?v=bwq61YpkCyM">
                <TreeItem
                  nodeId="17"
                  label="Bayesian Prediction"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
            </TreeItem>
            <TreeItem
              nodeId="34"
              label="Documents"
              classes={{ label: classes.label2 }}
              icon={<NoteAddRoundedIcon />}
            >
              <a href="https://www.youtube.com/watch?v=tYqQGuTjW-U&t=4s">
                <TreeItem
                  nodeId="3"
                  label="Introduction to ML-1"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
            </TreeItem>
            <TreeItem
              nodeId="35"
              label="Quiz"
              classes={{ label: classes.label2 }}
              icon={<CreateRoundedIcon />}
            >
              <a href="https://www.youtube.com/watch?v=tYqQGuTjW-U&t=4s">
                <TreeItem
                  nodeId="3"
                  label="Introduction to ML-1"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
            </TreeItem>
          </TreeItem>
        </TreeView>
      </Paper>
      <Paper elevation={3} className={classes.paper}>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          <TreeItem
            nodeId="18"
            label="Lecture 4: Probability Distribution"
            classes={{ label: classes.label }}
          >
            <p>
              Our experienced researchers come up with great AI ideas. They
              mentor the young students and get them onboard with the required
              background knowledge of the problems. While the students actively
              work on the project, they receive close mentorship. Together, we
              come up with an awesome solution to the problem and present it to
              the scientific community.
            </p>
            <TreeItem
              nodeId="19"
              label="Lecture Recording"
              classes={{ label: classes.label2 }}
              icon={<VideoLibraryRoundedIcon />}
            >
              <a href="https://www.youtube.com/watch?v=YkqCR1ifPeo">
                <TreeItem
                  nodeId="20"
                  label="Probability Distribution"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
              <a href="https://www.youtube.com/watch?v=ZYVuLeTZXxs">
                <TreeItem
                  nodeId="8"
                  label="Bernoulli and bionomial Distribution"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
              <a href="https://www.youtube.com/watch?v=Efu8WfHcmR8">
                <TreeItem
                  nodeId="9"
                  label="Beta Distribution"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
              <a href="https://www.youtube.com/watch?v=2ydOafOSi2k">
                <TreeItem
                  nodeId="9"
                  label="Multinomial Distribution"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
              <a href="https://www.youtube.com/watch?v=ndVsk83QFxU">
                <TreeItem
                  nodeId="9"
                  label="Gaussian Distribution-II"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
            </TreeItem>
            <TreeItem
              nodeId="36"
              label="Documents"
              classes={{ label: classes.label2 }}
              icon={<NoteAddRoundedIcon />}
            >
              <a href="https://www.youtube.com/watch?v=tYqQGuTjW-U&t=4s">
                <TreeItem
                  nodeId="3"
                  label="Introduction to ML-1"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
            </TreeItem>
            <TreeItem
              nodeId="37"
              label="Quiz"
              classes={{ label: classes.label2 }}
              icon={<CreateRoundedIcon />}
            >
              <a href="https://www.youtube.com/watch?v=tYqQGuTjW-U&t=4s">
                <TreeItem
                  nodeId="3"
                  label="Introduction to ML-1"
                  classes={{ label: classes.inside }}
                  icon={<PlayArrowRoundedIcon />}
                />
              </a>
            </TreeItem>
          </TreeItem>
        </TreeView>
      </Paper>
    </div>
  );
}
