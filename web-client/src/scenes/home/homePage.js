import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Page from '../../components/Page';
import styles from './styles.js';


class HomePage extends Component {

  render() {
    const { classes } = this.props;
    

    return (
      <Page>
        <img src="under.svg" align="middle" width="600" height="444" />
        <Typography>
          <br/>
          <span><strong><h3>WELCOME TO KELUARGA BERENCANA WEB</h3></strong></span>
        </Typography>
        
      </Page>
    );
  }
}

export default withStyles(styles, { withTheme: true })(HomePage);