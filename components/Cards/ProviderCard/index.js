import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    borderRadius: 17,
    padding: '2rem',
    width: props => props.width || 'initial',
    height: props => props.height || 'initial',
  }
}));

const ProviderCard = (props: Object) => {
  const classes = useStyles(props);
  const [state, setState] = useState();

  return (
    <Card className={classes.card}>
      {props.children}
    </Card>
  );
};

export default ProviderCard;