import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import { Fonts } from '../../../styles';

const useStyles = makeStyles(theme => ({
  text: {
    fontSize: props => {
      let fontSize;

      switch (props.size) {
        case 'extra':
          fontSize = Fonts.SIZES.EXTRA_TITLE_TEXT;
          break;
        case 'title':
          fontSize = Fonts.SIZES.TITLE_TEXT;
          break;
        case 'subtitle':
          fontSize = Fonts.SIZES.SUBTITLE_TEXT;
          break;
        case 'large':
          fontSize = Fonts.SIZES.LARGE_DESCRIPTION_TEXT;
          break;
        case 'medium':
          fontSize = Fonts.SIZES.MEDIUM_DESCRIPTION_TEXT;
          break;
        case 'small':
          fontSize = Fonts.SIZES.SMALL_DESCRIPTION_TEXT;
          break;
        case 'message':
          fontSize = Fonts.SIZES.MESSAGE_TEXT;
          break;
        case 'message-info':
          fontSize = Fonts.SIZES.MESSAGE_INFO_TEXT;
          break;
        default:   
          fontSize = Fonts.SIZES.MEDIUM_DESCRIPTION_TEXT;
      }
      
      return fontSize;
    }
  },
}));

const BaseText = (props: Object) => {
  const classes = useStyles(props);

  return (
    <div className={classNames(classes.text, props.className)}>
      {props.children}
    </div>
  );
};

export default BaseText;