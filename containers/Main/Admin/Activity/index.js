import React, { useState } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Activity = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState();

  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
};

export default Activity;