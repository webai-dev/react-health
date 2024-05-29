import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import { Colors, Dimensions } from '../../../styles';

const useStyles = makeStyles(theme => ({
  input: {
    border: 'none',
    outline: 'none',
    backgroundColor: props => props.backgroundColor || Colors.COLOR_INPUT_DEFAULT_BACKGROUND,
    borderRadius: props => props.borderRadius || Dimensions.DIMENSION_INPUT_DEFAULT_HEIGHT / 2,
    color: props => props.color || Colors.COLOR_INPUT_DEFAULT_TEXT,
    fontSize: props =>props.fontSize || Dimensions.DIMENSION_INPUT_DEFAULT_FONTSIZE,
    height: props => props.height || Dimensions.DIMENSION_INPUT_DEFAULT_HEIGHT,
    padding: props => props.padding || Dimensions.DIMENSION_INPUT_DEFAULT_PADDING,
    textAlign: props => props.textAlign || 'center',
    width: props => props.width || '100%',
    opacity: props => props.disabled ? 0.5 : 1,
  },
}));

const MainInput = (props: Object) => {
  const classes = useStyles(props);

  return (
    <input 
      {...props}
      className={classNames(classes.input, props.className)}
    />
  );
};

export default MainInput;