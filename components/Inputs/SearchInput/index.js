import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import { Dimensions, Colors, Images } from '../../../styles';

import MainInput from '../MainInput';

const useStyles = makeStyles(theme => ({
  root: {},
  card: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: Dimensions.DIMENSION_INPUT_DEFAULT_HEIGHT,
    borderRadius: Dimensions.DIMENSION_INPUT_DEFAULT_HEIGHT / 2,
    width: '100%',
  },
  searchIcon: {
    position: 'absolute',
    right: '1rem',
  },
}));

let timeoutId;

const SearchInput = (props: Object) => {
  const classes = useStyles();
  const [state, setState] = useState({
    value: ''
  });

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      value: props.value,
    }));
  }, [props.value]);

  const handleChangeText = (e) => {
    let value = e.target.value;

    setState((prevState) => ({
      ...prevState,
      value,
    }));

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      props.onThrottleInput && props.onThrottleInput(value);
    }, 1000);
  };

  return (
    <Card className={classNames(classes.card, props.className)}>
      <MainInput
        backgroundColor={Colors.COLOR_WHITE}
        padding="0 2.5rem 0 1rem"
        textAlign="left" 
        onChange={handleChangeText}
        value={state.value}
      />
      <img className={classes.searchIcon} src={Images.ICON_SEARCH}/>
    </Card>
  );
};

export default SearchInput;