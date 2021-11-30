import { makeStyles } from "@mui/styles";

import { Grid, Box, Typography, Link } from "@mui/material";

import RoomIcon from "@mui/icons-material/Room";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.main,
    borderWidth: 1,
    borderRadius: 30,
    boxShadow: "20px 20px 60px #d9d7d2, -20px -20px 60px #ffffff",
    paddingBottom: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.main,
    fontFamily: "Montserrat",
  },
  icon: {
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "center",
    width: "90%",
  },
  link: {
    fontFamily: "Montserrat",
    fontSize: 15,
  },
}));

export default function CardAcces(props) {
  const { acces } = props;
  const classes = useStyles();
  return (
    <Box className={classes.container} m={0.5} p={1} minWidth={280}>
      <Grid justify="space-around" alignItems="center" container>
        <Grid item xs={3}>
          <RoomIcon className={classes.icon} fontSize="large" />
        </Grid>
        <Grid item>
          <Typography className={classes.title} variant="h5" gutterBottom>
            Accès
          </Typography>
          <Typography>{acces.info}</Typography>
          {acces.handicap ? <Typography>Accès handicapé</Typography> : null}
          <Typography>Parking - {acces.parking}</Typography>
          <Link
            underline="hover"
            color="error"
            href="https://www.tisseo.fr/sites/default/files/ligne87.html"
            className={classes.link}
          >
            {acces.transport}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
