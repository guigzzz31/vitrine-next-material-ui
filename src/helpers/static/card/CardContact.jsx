import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CallIcon from "@material-ui/icons/Call";

import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.light,
    borderWidth: 1,
    borderRadius: 10,
  },
}));

export default function Cardcontact(props) {
  const { contact } = props;
  const classes = useStyles();
  return (
    <Box className={classes.container} boxShadow={3} p={1}>
      <Grid container>
        <Grid item>
          <CallIcon color="primary" />
        </Grid>
        <Grid item>
          <Typography>Coordonées</Typography>
          <Typography>{contact.num}</Typography>
          <Typography>Doctolib</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
