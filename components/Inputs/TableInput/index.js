import React, { useState } from 'react';
import graphql from 'babel-plugin-relay/macro';
import { createFragmentContainer } from 'react-relay';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {},
  input: {
    width:  props => props.width,
    height: props => props.height,
    border: 'none',
    outline: 'none',
    borderBottom: '1px solid #888',
  }
}));

const TableInput = (props: Object) => {
  const classes = useStyles(props);
  const [state, setState] = useState();

  return (
    <input 
      className={classes.input}
      min={props.min}
      max={props.max}
      onChange={props.onChange}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
    />
  )
};

export default TableInput;