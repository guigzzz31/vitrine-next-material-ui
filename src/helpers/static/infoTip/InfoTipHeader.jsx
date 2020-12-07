import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import LightBulbIcon from "../LightBulbIcon";

export default function InfoTipHeader(props) {
  const { head } = props;
  return (
    <Grid spacing={1} container>
      <Grid item>
        <LightBulbIcon />
      </Grid>
      <Grid item>
        <Typography color="primary" paragraph>
          {head}
        </Typography>
      </Grid>
    </Grid>
  );
}
