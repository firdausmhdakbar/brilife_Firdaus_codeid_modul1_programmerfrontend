import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PinDropIcon from '@material-ui/icons/PinDrop';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import SecurityIcon from '@material-ui/icons/Security';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';

import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        background: 'linear-gradient(to right, #1976d2, #0d47a1, #2196f3, #7e57c2, #b39ddb, #5e35b1, #4527a0 )',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },

    appBarShift: {
        background: 'linear-gradient(to right, #aa00ff, #7e57c2, #4527a0, #5e35b1, #b39ddb, #5e35b1, #4527a0 )',
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    titleBar: {
        color: 'white',
        fontVariant: 'small-caps',
        fontSize: '25px'
    }
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}

            >
                <Toolbar>
                    <IconButton

                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.titleBar} variant="h6" noWrap>
                        Keluarga Berencana
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link to="/home">
                        <ListItem button>
                            <ListItemIcon><HomeWorkIcon /></ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </Link>

                    <Link to="/propinsi">
                        <ListItem button>
                            <ListItemIcon><PinDropIcon /></ListItemIcon>
                            <ListItemText primary="Propinsi" />
                        </ListItem>
                    </Link>

                    <Link to="/kontrasepsi">
                        <ListItem button>
                            <ListItemIcon><SecurityIcon /></ListItemIcon>
                            <ListItemText primary="Kontrasepsi" />
                        </ListItem>
                    </Link>

                    <Link to="/pemakaikontrasepsi">
                        <ListItem button>
                            <ListItemIcon><SupervisorAccountIcon /></ListItemIcon>
                            <ListItemText primary="Pemakai Kontrasepsi" />
                        </ListItem>
                    </Link>

                    <Link to="/about">
                        <ListItem button>
                            <ListItemIcon><CloudQueueIcon /></ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
            </Drawer>
        </div>
    );
}
