import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default ({ onChange, value }) => (
  <FormControl>
    <InputLabel>Type</InputLabel>
    <Select
      value={value}
      onChange={onChange}
    >
      <MenuItem value="cheap">Cheap</MenuItem>
      <MenuItem value="business">Business</MenuItem>
    </Select>
  </FormControl>
)