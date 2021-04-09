import React from 'react';
import ColoredPaper from "../ColoredPaper/ColoredPaper";
import {Box, Grid, Hidden, Typography, useTheme} from "@material-ui/core";
import  "./AppHeader.css"

function AppHeader(props) {
    const theme = useTheme();
    return (
        <Box width={1}>
            <ColoredPaper color={theme.palette.primary} square elevation={0}>
                <Grid container direction="row" justify={"flex-start"} alignItems={"flex-start"}>
                    <Hidden smDown>
                        <Typography variant="h1" style={{paddingLeft: 22}}>Cryogenic Underground Test Facility</Typography>
                    </Hidden>
                    </Grid>
                <Box width={1} height={10}/>
            </ColoredPaper>
        </Box>
    );
}

export default AppHeader;