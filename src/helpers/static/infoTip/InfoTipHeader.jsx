import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import LightBulbIcon from "../LightBulbIcon";

export default function InfoTipHeader(props) {
  const { head } = props;
  return (
    <Box p={1}>
      <Grid spacing={1} container>
        <Grid item>
          <LightBulbIcon />
        </Grid>
        <Grid item>
          <Typography color="primary">{head}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
