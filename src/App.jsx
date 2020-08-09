import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

import { asyncActionCreators } from './redux';
import { TrackList } from './containers';

class App extends Component {
  componentDidMount() {
    const { getDeezerData } = this.props;
    getDeezerData();
  }

  render() {
    const { classes, dataInitialized, serverError } = this.props;

    if (serverError) {
      return (
        <Alert className={classes.error} severity="error">
          Server error, please try again later.
        </Alert>
      );
    }

    return (
      <Container className={classes.mainContainer}>
        <div className={classes.contentContainer}>
          {dataInitialized && <TrackList />}
          {!dataInitialized && (
            <CircularProgress className={classes.spinner} size={80} />
          )}
        </div>
      </Container>
    );
  }
}

const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  spinner: {
    alignSelf: 'center',
  },
  error: {
    height: '50px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

App.propTypes = {
  dataInitialized: PropTypes.bool,
  serverError: PropTypes.bool,
  getDeezerData: PropTypes.func,
  classes: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    dataInitialized: state.dataInitialized,
    serverError: state.serverError,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getDeezerData: () => dispatch(asyncActionCreators.getDeezerData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
