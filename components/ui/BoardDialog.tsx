import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import useStore, { BOARD_SUFFIX, IMedia } from '../store';

export const useStyles = makeStyles((theme: Theme) => ({
  boardMedia: {
    width: '100%',
    height: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: '80%',
    },
  },
}));

export function BoardDialog({
  onClose,
  selectedItem,
  open,
}: {
  onClose: () => void;
  selectedItem: IMedia;
  open: boolean;
}) {
  const classes = useStyles();
  const { mediaPath } = useStore();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="board-dialog" open={open} maxWidth={'md'}>
      <DialogTitle id="board-dialog-title">{selectedItem.name}</DialogTitle>
      <DialogContent>{selectedItem.description}</DialogContent>
      <img
        alt={selectedItem.name}
        className={classes.boardMedia}
        src={`${process.env.pathPrefix}/images/${mediaPath}${selectedItem.source}${BOARD_SUFFIX}`}
        width={selectedItem.landscape ? 1000 : 800}
        height={selectedItem.landscape ? 800 : 1000}
      />
      <DialogTitle id="board-dialog-sub-title">{selectedItem.link}</DialogTitle>
      <DialogContent>{selectedItem.footer}</DialogContent>
    </Dialog>
  );
}
