import React from 'react';
import FoundLink from 'found/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
  },
}));

const Link = (props: Object) => {
  const classes = useStyles();
  
  return (
    <FoundLink
      className={classes.link}
      to={props.to}
    >
      {props.children}
    </FoundLink>
  );
};

export default Link;