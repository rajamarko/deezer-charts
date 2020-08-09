import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    overflowX: 'auto',
  },
  paper: {
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
    padding: theme.spacing(0, 0, 4, 4),
    boxSizing: 'border-box',
    minWidth: 550,
  },
  artistImageContainer: {
    width: 250,
  },
  artistImage: {
    borderRadius: '4px',
  },
  containerRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  trackInformationContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: theme.spacing(0, 4, 0, 0),
  },
  trackPositionContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  closeButton: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
