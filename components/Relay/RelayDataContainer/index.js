import React, { useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const RelayDataContainer = ({relay, Component, ...rest}: Object) => {
  const classes = useStyles();
  const [state, setState] = useState();

  return (
    <Component
      {...rest}
      relay={relay}
      router={relay.props && relay.props.router}
      viewer={relay.props}
    />
  );
};

export default RelayDataContainer;