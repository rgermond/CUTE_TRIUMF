import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FunctionButtons from "../FunctionButtons/functionButtons";
import ActiveControl from "../ActiveControl/ActiveControl";
import App from "../../App";
const useStyles = makeStyles((theme) => ({
  rootGrid: { width: 1000 },
  papersliver: {
    maxWidth: 333,
    height: 50,
    backgroundColor: "grey",
  },
  paperroot: {
    padding: theme.spacing(2),
    height: 300,
    width: 200,
    backgroundColor: "darkgrey",
  },
  paperbig: {
    maxWidth: 333,
    height: 400,
    backgroundColor: "grey",
  },
  paperdiagram: {
    overflow: "auto",
    minWidth: 100,
    maxWidth: 200,
    maxHeight: 530,
    backgroundColor: "darkgrey",
  },
  paperitem: {
    marginBottom: 10,
    height: 50,
    backgroundColor: "grey",
  },
}));

export default function Expand(props) {
  const classes = useStyles();

  const [params, setParams] = React.useState({
    buttonCmds: "",
  });
  return (
    <div className={classes.rootGrid}>
      <Grid
        item
        xs={6}
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={9} container direction="column" spacing={2}>
          <Grid item>
            <Paper className={classes.papersliver}>
              <ActiveControl></ActiveControl>
            </Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paperbig}>{props.buttons}</Paper>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <App
            init={"display"}
            initWidth={482}
            onclick={props.onclick}
            extra={params.buttonCmds}
            commands={props.commands}
            onSubmit={props.onSubmit}
          ></App>
        </Grid>
      </Grid>
    </div>
  );
}
