import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  banner: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
  },
}));

const main = {
  title: 'Wissen! Malen! Entspannen!',
  description: 'Erstelle individuelle Mandalas mit Details aus historischen Kupferstichen.',
};

export default function Header() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} className={classes.banner}>
      <Typography variant="h3" component="h2" gutterBottom>
        {main.title}
      </Typography>
      <Typography variant="h4" component="h3" paragraph>
        {main.description}
      </Typography>
    </Grid>
  );
}
