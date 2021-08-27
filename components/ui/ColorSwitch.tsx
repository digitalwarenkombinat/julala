import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

import useStore from '../store';

export default function ShareButtons() {
  const handleColorMode = () => {
    useStore.setState({ colorMode: !useStore.getState().colorMode });
  };
  return (
    <FormGroup>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>S/W</Grid>
          <Grid item>
            <Switch
              checked={useStore.getState().colorMode}
              onChange={handleColorMode}
              name="colorMode"
              color="secondary"
            />
          </Grid>
          <Grid item>Bunt</Grid>
        </Grid>
      </Typography>
    </FormGroup>
  );
}