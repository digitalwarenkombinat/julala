import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

import CustomLink from '../CustomLink';

export default function SelectFab() {
  return (
    <CustomLink href="/edit">
      <Fab variant="extended" color="secondary" aria-label="edit">
        <EditIcon />
        Erstelle dein Julala!
      </Fab>
    </CustomLink>
  );
}
