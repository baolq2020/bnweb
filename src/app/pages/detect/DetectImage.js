
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {sendImage} from "../../crud/detect.crud";
import * as detect from "../../store/ducks/detect.duck";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function DetectImage(props) {
  const classes = useStyles();

	const handleSubmission = (event) => {

    if (event.target.files[0] !== undefined){
      const formData = new FormData();
      formData.append('file', event.target.files[0]);
      sendImage(formData)
    }
    
	};

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <div>
              <div>
                <input type="file" name="file" onChange={handleSubmission} />
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper id="result-detect-image" className={classes.paper}><img src={props.image}  alt="test"/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}


export default connect(
  detect.states,
  detect.actions
)(DetectImage);
