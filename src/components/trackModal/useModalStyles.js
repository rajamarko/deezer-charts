import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflowX: 'auto',
  },
  paper: {
    minWidth: 550,
    '@media (max-width:550px)': {
      minWidth: 250,
    },
  },
  title: {
    marginRight: theme.spacing(4),
  },
  artistImageContainer: {
    width: 250,
    paddingTop: theme.spacing(3),
    '@media (max-width:550px)': {
      alignSelf: 'center',
    },
  },
  artistImage: {
    borderRadius: '4px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    '@media (max-width:550px)': {
      flexDirection: 'column',
    },
  },
  trackInformationContainer: {
    marginLeft: theme.spacing(3),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
}));
