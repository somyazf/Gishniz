import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(2),
    },
    input: {
      display: 'none',
    },
}));
  
export default function DetailButtons() {
const classes = useStyles();
return (
    <div>
        <Button variant="contained" color="secondary" className={classes.button}>
        Detail
      </Button>
    </div>
    );
}