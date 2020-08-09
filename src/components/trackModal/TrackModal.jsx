import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

import { durationSecToMmSs } from '../../helpers';
import useModalStyles from './useModalStyles';

function TrackModal({ closeModal, trackElement }) {
  const classes = useModalStyles();

  return (
    <Dialog open onClose={closeModal}>
      <DialogTitle>
        <div className={classes.title}>{trackElement.title}</div>
        <IconButton className={classes.closeButton} onClick={closeModal}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <div className={classes.paper}>
          <div className={classes.container}>
            <div className={classes.artistImageContainer}>
              <img
                className={classes.artistImage}
                alt="Artist"
                src={trackElement.artist.picture_medium}
              />
            </div>
            <div className={classes.trackInformationContainer}>
              <List>
                <ListItem>
                  <ListItemText
                    primary={trackElement.artist.name}
                    secondary="artist"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={trackElement.album.title}
                    secondary="album"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={`${trackElement.listPosition}.`}
                    secondary="position"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary={durationSecToMmSs(trackElement.duration)}
                    secondary="duration"
                  />
                </ListItem>
              </List>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

TrackModal.propTypes = {
  closeModal: PropTypes.func,
  trackElement: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    artist: PropTypes.object,
    album: PropTypes.object,
    duration: PropTypes.number,
    listPosition: PropTypes.number,
  }),
};

TrackModal.defaultProps = {
  closeModal: () => {},
};

export default TrackModal;
