import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

import {
  TrackElement,
  DurationSortSelector,
  TrackModal,
} from '../../components';
import { sortTracksByDuration } from '../../helpers';

class TrackList extends Component {
  state = {
    modalIsOpen: false,
    durationSortValue: 'duration',
    selectedTrack: null,
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleDurationSortChange = (newValue) => {
    this.setState({ durationSortValue: newValue });
  };

  handleTrackClick = (trackElement, listPosition) => {
    const selectedTrack = { ...trackElement, listPosition };

    this.setState({ modalIsOpen: true, selectedTrack });
  };

  render() {
    const { classes, deezerTracks } = this.props;
    const { durationSortValue, modalIsOpen, selectedTrack } = this.state;

    const sortedTracks = sortTracksByDuration(deezerTracks, durationSortValue);

    return (
      <>
        <TableContainer className={classes.tableContainer} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCellSmall} align="center">
                  Position
                </TableCell>
                <TableCell className={classes.tableCellSmall} align="center">
                  Rank
                </TableCell>
                <TableCell align="left">Track</TableCell>
                <TableCell align="left">Artist</TableCell>
                <TableCell className={classes.tableCellSmall} align="right">
                  <DurationSortSelector
                    value={durationSortValue}
                    onChange={this.handleDurationSortChange}
                  />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedTracks.map((trackElement, index) => (
                <TrackElement
                  key={trackElement.id}
                  listPosition={index + 1}
                  onClick={this.handleTrackClick}
                  trackElement={trackElement}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {modalIsOpen && (
          <TrackModal
            closeModal={this.closeModal}
            trackElement={selectedTrack}
          />
        )}
      </>
    );
  }
}

const styles = {
  tableContainer: {
    minWidth: 700,
    maxWidth: 1150,
  },
  tableCellSmall: {
    width: '5%',
  },
};

TrackList.propTypes = {
  deezerTracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      position: PropTypes.number,
      title: PropTypes.string,
      artist: PropTypes.object,
      duration: PropTypes.number,
    })
  ),
  classes: PropTypes.object,
};

const mapStateToProps = (state) => ({
  deezerTracks: state.deezerTracks,
});

export default connect(mapStateToProps)(withStyles(styles)(TrackList));
