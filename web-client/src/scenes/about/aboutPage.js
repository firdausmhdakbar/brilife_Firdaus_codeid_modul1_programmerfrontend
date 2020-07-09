import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Page from '../../components/Page';
import styles from './styles.js';


class AboutPage extends Component {

  render() {
    const { classes } = this.props;


    return (
      <Page>
        <img src="under2.svg" align="middle" width="300" height="300" />
        <Typography>
          <br />
          <span><strong><h3>THIS IS ABOUT PAGE</h3></strong></span>
          <p>Inventory web is a simple web created with the aim to facilitate users in doing data recapitulation,</p>
          <p>where users can easily process Keluarga Berencana data, ranging from adding new data, editing, deleting, and others.</p>
          <p>There are four main menus, namely, Propinsi, Kontrasepsi, and PemakaiKontrasepsi.</p>
          <p>Where on each menu can be easily accessed and used by users.</p>
        </Typography>

      </Page>
    );
  }
}

export default withStyles(styles, { withTheme: true })(AboutPage);