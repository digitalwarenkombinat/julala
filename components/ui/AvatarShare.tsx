import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import useStore, { ELEMENT_SUFFIX } from '../store';

const useStyles = makeStyles((theme: Theme) => ({
  avatarList: {
    padding: theme.spacing(2, 4, 0),
  },
  avatar: {
    borderColor: theme.palette.info.main,
    height: '3rem',
    width: '3rem',
  },
  name: {
    fontSize: '12px',
  },
  description: {
    fontSize: '11px',
    marginBottom: theme.spacing(0.5),
  },
}));

export default function AvatarShare() {
  const classes = useStyles();
  const { getSelectedElements, mediaPath } = useStore();

  return (
    <Grid item xs={12} className={classes.avatarList}>
      <Grid container alignItems="center">
        {getSelectedElements().map((element, index) => (
          <Grid key={element.name + index} item container alignItems="center">
            <Grid item xs={2}>
              <Avatar
                variant="square"
                key={element.name + index}
                alt={element.name}
                src={`${process.env.pathPrefix}/images/${mediaPath}${element.source}${ELEMENT_SUFFIX}`}
                className={classes.avatar}
              />
            </Grid>
            <Grid item xs={10}>
              <Typography className={classes.name}>{element.shortName}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
