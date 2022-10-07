import { makeStyles } from '@mui/styles';
import { colors } from '../../theme';

export const useExperienceStyles: Function = makeStyles(() => ({
  title: {
    color: colors.Lime,
    fontFamily: 'press-start !important',
    textAlign: 'center',
    textTransform: 'lowercase',
    padding: '30px 0'
  },
  experienceTimeline: {
    minWidth: '100vh',
    overflow: 'auto'
  },
  timelineConnector: {
    backgroundColor: `${colors.Lime} !important`,
  },
  timelineDot: {
    backgroundColor: `${colors.Transparent} !important`,
    boxShadow: 'none !important'
  },
  icon: {
    color: colors.Lime
  },
  content: {
    overflow: 'auto'
  },
  timeFrame: {
    fontFamily: 'press-start !important',
    fontSize: '0.75rem !important',
    color: colors.Lime,
    margin: 0,
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  experienceCardRHS: {
    display: 'flex',
    width: '750px',
    background: `${colors.Transparent} !important`
    // border: `2px solid ${colors.Lime}`
  },
  experienceCardLHS: {
    display: 'flex',
    width: '750px',
    margin: '0 0 0 auto',
    textAlign: 'left',
    background: `${colors.Transparent} !important`
    // border: `2px solid ${colors.Lime}`
  },
  experienceHeaderText: {
    fontFamily: 'press-start !important',
    fontSize: '0.9rem !important',
    color: colors.White
  },
  experienceBodyText: {
    fontFamily: 'press-start !important',
    fontSize: '0.75rem !important',
    color: colors.White,
  },
  image: {
    maxWidth: 250,
    maxHeight: 250
  }
}));
