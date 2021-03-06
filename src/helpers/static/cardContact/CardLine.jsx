import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import CallIcon from "@material-ui/icons/Call";
import LinkIcon from "@material-ui/icons/Link";
import PersonIcon from "@material-ui/icons/Person";
import CardHeader from "./CardHeader";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.light,
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom: theme.spacing(2),
  },
  title: {
    fontFamily: "Montserrat",
  },
  cardLine: {
    fontFamily: "Roboto",
    fontWeight: 500,
  },
}));

export default function CardContact(props) {
  const { contact } = props;
  const classes = useStyles();
  return (
    <Grid justify="space-around" alignItems="center" container>
      <Grid item>
        <CallIcon color="primary" fontSize="large" />
      </Grid>
      <Grid item>
        <Typography className={classes.cardLine} gutterBottom>
          {contact.num}
        </Typography>
      </Grid>
    </Grid>
  );
}
