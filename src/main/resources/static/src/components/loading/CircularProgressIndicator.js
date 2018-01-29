import React from "react";
import Paper from "material-ui/Paper";
import CircularProgress from "material-ui/CircularProgress";

const CircularProgressIndicator = () => (
    <Paper zDepth={0}>
        <CircularProgress/>
        <h3>Loading...</h3>
    </Paper>
);

export default CircularProgressIndicator;