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
export default function Generating() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <div>
        <h4 className={classes.heading}>
          Generating Annotated High-Fidelity Images containing Multiple Coherent
          Objects
        </h4>
        <div className={classes.width}>
          <h6 className={classes.float}>
            <a
              href=" "
              onClick={() => history.push("/TransmuteAI/publications/bryan")}
            >
              Bryan Cardenas ,
            </a>
          </h6>
          <h6 className={classes.float}>
            <a
              href=" "
              onClick={() =>
                history.push("/TransmuteAI/publications/deepanshu")
              }
            >
              Devanshu Arya ,
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
          <h4 className={classes.abstract}>Abstract</h4>
          <p className={classes.paragraph}>
            Recent developments related to generative models have made it
            possible to generate diverse high-fidelity images. In particular,
            layout-to-image generation models have gained significant attention
            due to their capability to generate realistic complex images
            containing distinct objects. These models are generally conditioned
            on either semantic layouts or textual descriptions. However, unlike
            natural images, providing auxiliary information can be extremely
            hard in domains such as biomedical imaging and remote sensing. In
            this work, we propose a multi-object generation framework that can
            synthesize images with multiple objects without explicitly requiring
            their contextual information during the generation process. Based on
            a vector-quantized variational autoencoder (VQ-VAE) backbone, our
            model learns to preserve spatial coherency within an image as well
            as semantic coherency between the objects and the background through
            two powerful autoregressive priors: PixelSNAIL and LayoutPixelSNAIL.
            While the PixelSNAIL learns the distribution of the latent encodings
            of the VQ-VAE, the LayoutPixelSNAIL is used to specifically learn
            the semantic distribution of the objects. An implicit advantage of
            our approach is that the generated samples are accompanied by
            object-level annotations. We demonstrate how coherency and fidelity
            are preserved with our method through experiments on the Multi-MNIST
            and CLEVR datasets; thereby outperforming state-of-the-art
            multi-object generative methods. The efficacy of our approach is
            demonstrated through application on medical imaging datasets, where
            we show that augmenting the training set with generated samples
            using our approach improves the performance of existing models.
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
    </div>
  );
}
