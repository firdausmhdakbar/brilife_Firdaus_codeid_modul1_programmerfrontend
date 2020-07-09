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
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#6200ea',
    },
    select:
    {
        width: 300
    }

});

export default styles;
