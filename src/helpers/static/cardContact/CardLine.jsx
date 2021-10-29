import { makeStyles } from "@mui/styles";

import { Grid, Typography } from "@mui/material";

import CallIcon from "@mui/icons-material/Call";


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
