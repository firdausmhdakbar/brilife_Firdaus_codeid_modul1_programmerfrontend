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
        justifyContent: 'flex-end',        
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#6200ea',
    },
    formButton: {
        float: 'right',
        background: 'linear-gradient(to right, #0d47a1, #2196f3, #b39ddb, #5e35b1, #4527a0 )',
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
