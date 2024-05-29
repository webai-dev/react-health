import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Dropdown = (props: Object) => {
  const classes = useStyles(props);
  const [state, setState] = useState();
  const { value, items, onChange } = props;

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <FormControl>
      <Select
        value={value}
        onChange={handleChange}
      >
        {
          items.map((item) => (
            <MenuItem value={item.value}>{item.label.includes('micro mol/L') ? <span>Kreatinin (&#181; mol/L)</span> : item.label}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
};

export default Dropdown;