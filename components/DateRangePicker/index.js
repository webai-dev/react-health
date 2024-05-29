import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';

import { Colors, Images } from '../../styles';
import { PrimaryText } from '../Texts';

import i18n from '../../i18n';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowIcon: {
    color: Colors.COLOR_PRIMARY_TEXT,
  },
  calendarControl: {
    display: 'flex',
    alignItems: 'center',
  },
  calendarIcon: {
    margin: '0 0.5rem',
  },
  dateText: {
    marginTop: 3,
  },
}));

const DateRangePicker = (props: Object) => {
  const classes = useStyles(props);
  const [state, setState] = useState();
  const { fromDate, toDate } = props;

  return (
    <div className={classes.root}>
      <Box className={classes.calendarControl}>
        <IconButton onClick={props.onClickPrevDate}>
          <ArrowBackIos className={classes.arrowIcon}/>
        </IconButton>
        <img className={classes.calendarIcon} src={Images.ICON_CALENDAR_ALT}/>
        <PrimaryText>{moment(fromDate).format('DD MMM')}</PrimaryText>
      </Box>
      <PrimaryText>{i18n.t('Select date range')}</PrimaryText>
      <Box className={classes.calendarControl}>
        <PrimaryText>{moment(toDate).format('DD MMM')}</PrimaryText>
        <img className={classes.calendarIcon} src={Images.ICON_CALENDAR_ALT}/>
        <IconButton onClick={props.onClickNextDate}>
          <ArrowForwardIos className={classes.arrowIcon}/>
        </IconButton>
      </Box>
    </div>
  );
};

export default DateRangePicker;