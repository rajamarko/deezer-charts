import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Select, MenuItem, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 110,
  },
  formHelperText: {
    alignSelf: 'flex-end',
  },
  select: {
    fontSize: '0.875rem',
    fontWeight: 500,
  },
}));

function DurationSortSelector({ onChange, value }) {
  const classes = useStyles();

  const handleValueChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        className={classes.select}
        value={value}
        onChange={handleValueChange}
      >
        <MenuItem value="duration">Duration</MenuItem>
        <MenuItem value="ascending">Ascending</MenuItem>
        <MenuItem value="descending">Descending</MenuItem>
      </Select>
    </FormControl>
  );
}

DurationSortSelector.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

DurationSortSelector.defaultProps = {
  onChange: () => {},
  value: 'duration',
};

export default memo(DurationSortSelector);
