import { ImageList } from '@material-ui/core';
import { ImageListItem } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import useStore, { ELEMENT_SUFFIX } from '../store';
import ItemBar from './ItemBar';

const useStyles = makeStyles((theme: Theme) => ({
  itemList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  imageList: {
    width: '90%',
    height: 'auto',
    margin: '0 !important',
  },
  imageListItem: {
    borderStyle: 'solid',
    borderColor: theme.palette.error.main,
    borderWidth: '1px',
  },
  itemSelected: {
    borderColor: theme.palette.info.main,
  },
  itemMedia: {
    filter: 'drop-shadow(1px 2px 3px black)',
    padding: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(10),
    },
  },
}));

export default function ItemList() {
  const classes = useStyles();
  const media = useStore((state) => state.media);
  const mediaPath = useStore((state) => state.mediaPath);

  const theme = useTheme();
  const matchesUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const matchesUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const matchesUpLg = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesUpXl = useMediaQuery(theme.breakpoints.up('xl'));

  function calculateRowHeight() {
    if (matchesUpMd) return 600;
    if (matchesUpSm) return 400;
    return 300;
  }

  function calculateCols() {
    if (matchesUpXl) return 4;
    if (matchesUpLg) return 3;
    if (matchesUpSm) return 2;
    return 1;
  }

  return (
    <Grid item xs={12} className={classes.itemList}>
      <ImageList className={classes.imageList} cols={calculateCols()} rowHeight={calculateRowHeight()}>
        {media.map((item) => (
          <ImageListItem
            key={item.source}
            className={`${classes.imageListItem} ${item.selected ? classes.itemSelected : ''}`}
          >
            <img
              alt={item.name}
              className={classes.itemMedia}
              src={`${process.env.pathPrefix}/images/${mediaPath}${item.source}${ELEMENT_SUFFIX}`}
            />
            <ItemBar item={item} />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
}
