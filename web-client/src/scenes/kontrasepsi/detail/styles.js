const styles = theme => ({
    formField: {
        padding: theme.spacing(1),
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
    progressButton:
    {
        marginTop: '70pt',
        marginLeft: '50%',
        color: "#64dd17"
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#64dd17',
    },


});

export default styles;
