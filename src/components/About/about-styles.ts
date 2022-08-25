import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useAboutStyles = makeStyles(() => ({
  aboutBox: {
    textAlign: 'center',
  },
  image: {
    height: '250px !important',
    width: '250px !important',
    margin: '2.5vh auto'
  },
  title: {
    fontFamily: 'consolas !important',
    color: colors.Lime
  },
  information: {
    width: '35vh',
    margin: '2.5vh  auto',
    padding: '1vh',
    borderRadius: '15px !important'
  },
  links: {
    overflowY: 'auto',
    maxHeight: '30vh'
  }
}));