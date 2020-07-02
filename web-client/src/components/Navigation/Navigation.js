import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import {
    Divider,
    Drawer,
    Hidden,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {
    AccountBalance as HomeIcon,
    CardTravel as ItemIcon,
    AddShoppingCart as StockIcon,
    DynamicFeed as UnitIcon
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';

const menus = [
    {
        path: '/home',
        icon: HomeIcon,
        label: 'Home'
    },
    {
        path: '/pemakaikontrasepsi',
        icon: StockIcon,
        label: 'Pemakai Kontrasepsi'
    },
    {
        path: '/propinsi',
        icon: ItemIcon,
        label: 'Propinsi'
    },
    {
        path: '/kontrasepsi',
        icon: UnitIcon,
        label: 'Kontrasepsi'
    }

];


class Navigation extends Component {

    render() {
        const { classes, theme, mobileOpen, handleDrawerToggle } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {menus.map((menu, index) => (
                        <Link key={index} to={menu.path}>
                            <ListItem button>
                                <ListItemIcon><menu.icon/></ListItemIcon>
                                <ListItemText primary={menu.label}/>
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                <List>
                    <Link to = "/about">
                    <ListItem button>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                    </Link>
                </List>
            </div>
        );

        return (
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{ 
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, 
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        );
    }
}

Navigation.propTypes = {

    mobileOpen: PropTypes.bool.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired
};
export default withStyles(styles, { withTheme: true })(Navigation);