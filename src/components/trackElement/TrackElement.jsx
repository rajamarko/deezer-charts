import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

import { durationSecToMmSs } from '../../helpers';

const useStyles = makeStyles(() => ({
  row: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#e6e6e6',
    },
  },
  tableCellSmall: {
    width: '5%',
  },
}));

function TrackElement({ listPosition, onClick, trackElement }) {
  const classes = useStyles();

  const onElementClickHandler = () => {
    onClick(trackElement, listPosition);
  };

  return (
    <TableRow
      className={classes.row}
      key={trackElement.id}
      onClick={onElementClickHandler}
    >
      <TableCell className={classes.tableCellSmall} align="center">
        {listPosition}
      </TableCell>
      <TableCell className={classes.tableCellSmall} align="center">
        {trackElement.position}
      </TableCell>
      <TableCell align="left">{trackElement.title}</TableCell>
      <TableCell align="left">{trackElement.artist.name}</TableCell>
      <TableCell className={classes.tableCellSmall} align="right">
        {durationSecToMmSs(trackElement.duration)}
      </TableCell>
    </TableRow>
  );
}

TrackElement.propTypes = {
  listPosition: PropTypes.number,
  onClick: PropTypes.func,
  trackElement: PropTypes.shape({
    id: PropTypes.number,
    position: PropTypes.number,
    title: PropTypes.string,
    artist: PropTypes.object,
    duration: PropTypes.number,
  }),
};

export default memo(TrackElement);
