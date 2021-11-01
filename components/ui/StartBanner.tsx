import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  banner: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
  },
  subTitle: {
    padding: theme.spacing(2, 0),
    fontWeight: 'bold',
  },
}));

const main = {
  title: 'Wissen! Malen! Entspannen!',
  subTitle: 'Tauche ein in die Welt der Renaissance.',
  description:
    'Es geht um die Hochzeit von Herzog Johann Wilhelm von Jülich-Kleve-Berg mit der Markgräfin Jakobe von Baden im Juni 1585.',
  subDescription:
    'Es geht um Feuerwerke, einem Kampf zwischen einem Drachen und einem Wal auf dem Rhein, um Theaterspiel und ein Zuckerbankett…',
};

export default function Header() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} className={classes.banner}>
      <Typography variant="h4" component="h2" gutterBottom>
        {main.title}
      </Typography>
      <Typography variant="h5" component="h3" paragraph className={classes.subTitle}>
        {main.subTitle}
      </Typography>
      <Typography variant="h5" component="h4" paragraph>
        {main.description}
      </Typography>
      <Typography variant="h5" component="h4" paragraph>
        {main.subDescription}
      </Typography>
    </Grid>
  );
}
