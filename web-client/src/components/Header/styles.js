const styles = theme => ({
    appBar: {
        // zIndex: theme.zIndex.drawer + 1,
        background: 'linear-gradient(to right, #1976d2, #0d47a1, #2196f3, #7e57c2, #b39ddb, #5e35b1, #4527a0 )',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    titleBar: {
        color: 'white',
        fontVariant: 'small-caps',
        fontSize: '25px'

    }
});

export default styles;
