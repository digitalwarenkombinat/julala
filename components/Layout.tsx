import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

import Header from './Header';
import useStore, { ELEMENT_SUFFIX } from './store';

const mediaPath = useStore.getState().mediaPath;
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.default,
    '@media print': {
      backgroundColor: 'transparent',
    },
  },
  background: {
    [theme.breakpoints.up('md')]: {
      backgroundImage: `url('${process.env.pathPrefix}/images/${mediaPath}background${ELEMENT_SUFFIX}')`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'bottom center',
      backgroundSize: '100% 33%',
    },
  },
  main: {
    color: theme.palette.text.primary,
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
    },
  },
}));

export default function Layout({ children }) {
  const router = useRouter();
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${router.asPath === '/' ? classes.background : ''}`}>
      <Header />
      <Grid container component="main" className={classes.main}>
        {children}
      </Grid>
    </div>
  );
}
