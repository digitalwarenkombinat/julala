import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import Link from 'next/link';

export default function SelectFab() {
  return (
    <Link href="/edit" passHref>
      <Fab variant="extended" color="primary">
        <EditIcon />
        Bearbeite dein Plantala
      </Fab>
    </Link>
  );
}
