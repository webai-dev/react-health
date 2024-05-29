import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Recipe = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState();

  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
};

export default Recipe;