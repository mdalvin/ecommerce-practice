import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { WhatsApp, GitHub, LinkedIn, Email } from "@material-ui/icons";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Toolbar>
        <div className={classes.container}>
          <a href="https://wa.me/6285322645645" target="_blank">
            <Typography variant="h6" className={classes.title}>
              <WhatsApp />
            </Typography>
          </a>
          <a href="https://github.com/mdalvin" target="_blank">
            <Typography variant="h6" className={classes.title}>
            <GitHub />
          </Typography>
          </a>
          <a href="https://linkedin.com/in/mochamaddalvin" target="_blank">
          <Typography variant="h6" className={classes.title}>
            <LinkedIn />
          </Typography>
          </a>
          <a href="mailto:mochamaddalvin@gmail.com" target="_blank">
          <Typography variant="h6" className={classes.title}>
            <Email />
          </Typography>
          </a>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
