import React from 'react';
import {makeStyles, Paper} from "@material-ui/core";


function ColoredPaper(props) {
    const {color, children, parentSize, ...other} = props;

    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: color ? color.main : '#FFF',
            color: color ? color.contrastText : '#000',
            height: parentSize? "100%" :  "auto",
            width: parentSize? "100%" :  "auto",
        }
    }));

    const classes = useStyles();

    return (
        <Paper className={classes.root} {...other} >{children}</Paper>
    );
}

export default ColoredPaper;