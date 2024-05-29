import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import BaseButton from '../BaseButton';
import { Colors } from '../../../styles';

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: Colors.COLOR_GREEN_BUTTON,
    '&:hover': {
      backgroundColor: Colors.COLOR_GREEN_BUTTON,
    },
    opacity: props => props.disabled ? 0.5 : 1,
  },
}));

const GreenButton = (props: Object) => {
  const classes = useStyles(props);

  return (
    <BaseButton
      disabled={props.disabled}
      className={classNames(classes.button, props.className)}
      width={props.width}
      onClick={props.onClick}
      size={props.size}
    >
      {props.children}
    </BaseButton>
  );
};

export default GreenButton;