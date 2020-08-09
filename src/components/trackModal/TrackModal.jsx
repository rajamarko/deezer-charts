import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  Backdrop,
  Fade,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';

import { durationSecToMmSs } from '../../helpers';
import useModalStyles from './useModalStyles';

function TrackModal({ isOpen, closeModal, trackElement }) {
  const classes = useModalStyles();

  return (
    <div className={classes.parent}>
      <Modal
        className={classes.modal}
        open={isOpen}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={isOpen}>
          {trackElement && (
            <div className={classes.paper}>
              <div className={classes.closeButton}>
                <IconButton onClick={closeModal}>
                  <Close fontSize="large" />
                </IconButton>
              </div>
              <div className={classes.containerRow}>
                <div className={classes.artistImageContainer}>
                  <img
                    className={classes.artistImage}
                    alt="Artist"
                    src={trackElement.artist.picture_medium}
                  />
                </div>
                <div className={classes.trackPositionContainer}>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={`${trackElement.listPosition}.`}
                        secondary="position"
                      />
                    </ListItem>
                  </List>
                </div>
                <div className={classes.trackInformationContainer}>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary={trackElement.title}
                        secondary="track"
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
                        primary={trackElement.artist.name}
                        secondary="artist"
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
          )}
        </Fade>
      </Modal>
    </div>
  );
}

TrackModal.propTypes = {
  isOpen: PropTypes.bool,
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
  isOpen: true,
  closeModal: () => {},
};

export default TrackModal;
