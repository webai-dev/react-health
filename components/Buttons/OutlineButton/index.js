import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import BaseButton from '../BaseButton';
import { Colors } from '../../../styles';

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: 'transparent',
    border: '1px solid #000',
  },
}));

const OutlineButton = (props: Object) => {
  const classes = useStyles(props);

  return (
    <BaseButton
      className={classNames(classes.button, props.className)}
      width={props.width}
      onClick={props.onClick}
      size={props.size}
    >
      {props.children}
    </BaseButton>
  );
};

export default OutlineButton;