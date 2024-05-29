import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  root: {},
  skeleton: {
    transform: 'none',
  },
}));

const SkeletonContainer = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState();

  return (
    <React.Fragment>
      {
        props.isLoading ? (
          <Skeleton className={classes.skeleton} width={props.width} height={props.height}/>
        ) : props.children
      }
    </React.Fragment>
  );
};

export default SkeletonContainer;