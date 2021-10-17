import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'PT Sans',
  },
  cartActions: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));