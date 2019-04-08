import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { DateTimePicker } from "material-ui-pickers";
import Input from '@material-ui/core/Input';

export default ({ departureTime, departurePoint, arrivalTime, arrivalPoint, onChange }) => (
  <Grid container spacing={24}>
    <Grid item sm={12}>
      <FormControl>
        <InputLabel>Departure</InputLabel>
        <Input type="text" value={departurePoint} onChange={(e) => { onChange('departurePoint')(e.target.value) }} />
      </FormControl>
    </Grid>
    <Grid item sm={12}>
      <FormControl>
        <DateTimePicker value={departureTime} onChange={(val) => { onChange('departureTime')(val.valueOf()) }} />
      </FormControl>
    </Grid>
    <Grid item sm={12}>
      <FormControl>
        <InputLabel>Arrival</InputLabel>
        <Input type="text" value={arrivalPoint} onChange={(e) => { onChange('arrivalPoint')(e.target.value) }} />
      </FormControl>
    </Grid>
    <Grid item sm={12}>
      <FormControl>
        <DateTimePicker value={arrivalTime} onChange={(val) => { onChange('arrivalTime')(val.valueOf()) }} />
      </FormControl>
    </Grid>
  </Grid>
)