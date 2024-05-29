import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { Dimensions } from '../../../styles';

const useStyles = makeStyles(theme => ({
  button: {
    width: props => props.width || '100%',
    borderRadius: props => {
      let borderRadius = 0;

      switch (props.size) {
        case 'large':
          borderRadius = Dimensions.DIMENSION_BUTTON_HEIGHT_LARGE / 2;
          break;
        case 'medium':
          borderRadius = Dimensions.DIMENSION_BUTTON_HEIGHT_MEDIUM / 2;
          break;
        case 'small':
          borderRadius = Dimensions.DIMENSION_BUTTON_HEIGHT_SMALL / 2;
          break; 
        default:
          borderRadius = Dimensions.DIMENSION_BUTTON_HEIGHT_LARGE / 2;
      }

      return borderRadius;
    },
    height: props => {
      let height = 0;

      switch (props.size) {
        case 'large':
          height = Dimensions.DIMENSION_BUTTON_HEIGHT_LARGE;
          break;
        case 'medium':
          height = Dimensions.DIMENSION_BUTTON_HEIGHT_MEDIUM;
          break;
        case 'small':
          height = Dimensions.DIMENSION_BUTTON_HEIGHT_SMALL;
          break; 
        default:
          height = Dimensions.DIMENSION_BUTTON_HEIGHT_LARGE;
      }

      return height;
    }
  },
}));

const BaseButton = (props: Object) => {
  const classes = useStyles(props);

  return (
    <Button
      disabled={props.disabled}
      className={classNames(classes.button, props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default BaseButton;