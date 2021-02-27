import React from 'react'
import {Box, makeStyles, Paper} from "@material-ui/core";
import ToggleHeader from "../../components/ToggleHeader/ToggleHeader";
import {ModuleDisplayStates} from "../../constants/moduleDisplayStates";


export default function PlaceholderWidget(props) {
    const displayState = props.displayState;

    let width = props.width ? props.width : 6;
    let height = props.height ? props.height : 40;

    switch (displayState) {
        case ModuleDisplayStates.OPEN :
            height = 40;
            width = 40;
            break;
        case ModuleDisplayStates.EXPANDED:
            height = 40;
            width = 75;
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(width),
                height: theme.spacing(height),
            },
        },
    }));
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Paper>
                <ToggleHeader minimizable={props.minimizable}
                              helpable={displayState !== ModuleDisplayStates.MINIMIZED}
                              onToggle={props.onDisplayChange}/>
            </Paper>
        </Box>

    )
}
