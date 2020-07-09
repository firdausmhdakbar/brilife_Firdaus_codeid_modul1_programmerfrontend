import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Page from '../../components/Page';
import styles from './styles.js';
import logo from '../home/logo.svg';


class HomePage extends Component {

  render() {
    const { classes } = this.props;


    return (
      <Page>
        <img src={logo} align="middle" width="1000" height="400" />
        <Typography>
          <br />
          <div className={classes.titleText}>
            <span><strong><h3>WELCOME TO KELUARGA BERENCANA WEB</h3></strong></span>
          </div>
        </Typography>

      </Page>
    );
  }
}

export default withStyles(styles, { withTheme: true })(HomePage);