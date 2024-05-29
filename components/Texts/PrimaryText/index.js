import React, { useState } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import BaseText from '../BaseText';
import { Colors } from '../../../styles';

const useStyles = makeStyles(theme => ({
  text: {
    color: Colors.COLOR_PRIMARY_TEXT,
  },
}));

const PrimaryText = (props: Object) => {
  const classes = useStyles(props);

  return (
    <BaseText
      className={classNames(classes.text, props.className)}
      size={props.size}
    >
      {props.children}
    </BaseText>
  );
};

export default PrimaryText;