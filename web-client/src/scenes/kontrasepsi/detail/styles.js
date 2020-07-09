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
        background: 'linear-gradient(to right, #0d47a1, #2196f3, #b39ddb, #5e35b1, #4527a0 )',
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
        color: '#6200ea',
    },


});

export default styles;
