const styles = theme => ({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    buttonContainer: {
        padding: theme.spacing(3),
        display: 'flex',
        justifyContent: 'flex-end'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#64dd17',
    },
    formButton: {
        float: 'right'
    },
    backButton:
    {
        justifyContent: 'default',
        background: "#64dd17",
        color: "white"
    },
    formField: {
        padding: theme.spacing(1),
    },
});

export default styles;
